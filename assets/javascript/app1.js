var counter,
	questions = [], //a copy of config array
	level = "",
	timer,
	questionNumber,
	numberOfQuestions = 10,
	rightAnswer,
	wrongAnswer,
	noAnswer;

function newGame(){
	questions = config.slice();
	$("#question").empty();
	questionNumber = 0;
	rightAnswer = 0;
	wrongAnswer = 0;
	noAnswer = 0;
}

function gameOver(){
	clearInterval(intervalId);
	var q = $("#msg");
	q.html("<h1>How you did</h1>");
	q.append("<h3>Right answers: " + rightAnswer + "</h3>");
	q.append("<h3>Wrong answers: " + wrongAnswer + "</h3>");
	q.append("<h3>Unanswered: " + noAnswer + "</h3>");

	$("#playAgain").css("display", "block");
}

function setCounter(){
	level = $("input[name= level]:checked").val();

	//Change the time depending on the selected level noob=30, pro=20 and master=10
	if(level == "noob"){
		counter = 25;
	} else if (level == "pro"){
		counter = 15;
	} else{
		counter = 10;
	}

	$("#timer").text(counter);
}

function newQuestion(){
	if(questionNumber == numberOfQuestions){
		gameOver();
	} else{

		setCounter();

		questionNumber ++;
		//get a random question and put it in curQuestion var
		var randomNum = Math.floor(Math.random() * questions.length);
		curQuestion = questions[randomNum];

		//delete the current question from array questions, that way we don't pick it again
		questions.splice(randomNum,1);

		$("#msg").hide();

		$("#questionHolder").show();
		//update html with new question
		$("#question").text(curQuestion.question);

		//update choices
		$(".choice").each(function(index){
			$(this).html(curQuestion.choices[index]);
		});

		$("#questionNumber").text(questionNumber);

		//start the timer
		intervalId = setInterval(updateTimer, 1000);
	}
}

function updateTimer(){
	counter--;
	$("#timer").text(counter);
	if(counter == 0){
		timesUp();
	}
}

function timesUp(){
	clearInterval(intervalId);
	$("#questionHolder").hide();
	$("#msg").show().html("<h2>Ooh no, times up!</h2>");
	$("#msg").append("<p>The answer is: " + curQuestion.choices[curQuestion.answer] + "</p>");
	setTimeout(newQuestion, 4000);
	noAnswer ++;
}

$(document).ready(function(){

	$("#play").click(function(){
		$("#intro").hide();
		$("#gameSection").show();
		newGame();
		newQuestion();
	})

	$(".choice").click(function(){
		clearInterval(intervalId);

		$("#questionHolder").hide();

		var answer = $(this).val();
		var correctAnswer = curQuestion.answer;

		if(answer == correctAnswer){
			$("#msg").html("<h1 class='correct'>Correct!</h1>").show();
			rightAnswer ++;
		} else {
			$("#msg").html("<h1 class='wrong'>Oops!</h1>").show();
			$("#msg").append("<p>The correct answer is: <br>" + curQuestion.choices[correctAnswer] + "</p>");
			wrongAnswer ++;
		}

		setTimeout(newQuestion, 3000);
	})

	$("#playAgain").click(function(){
		$("#intro").show();
		$("#gameSection").hide();
		$(this).css("display", "none");
	})
})