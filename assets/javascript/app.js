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
	var q = $("#question");
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
		counter = 30;
	} else if (level == "pro"){
		counter = 20;
	} else{
		counter = 10;
	}

	$("#timer").html(counter);
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


		//update html with new question
		$("#question").html("<h3>" + curQuestion.question + "</h3>");
		
		$("#choices").show();

		//update choices
		$(".choice").each(function(index){
			$(this).html(curQuestion.choices[index]);
		});

		$("#questionNumber").html(questionNumber);

		//start the timer
		intervalId = setInterval(updateTimer, 1000);
	}
}

function updateTimer(){
	counter--;
	$("#timer").html(counter);
	if(counter == 0){
		timesUp();
	}
}

function stopTimer(){
	clearInterval(intervalId);
}

function timesUp(){
	clearInterval(intervalId);
	$("#choices").hide();
	$("#question").append("<h2>Ooh no!</h2>");
	$("#question").append("<p>The answer is: " + curQuestion.choices[curQuestion.answer] + "</p>");
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
		stopTimer();

		$("#choices").hide();

		var answer = $(this).val();
		var correctAnswer = curQuestion.answer;
		

		if(answer == correctAnswer){
			$("#question").append("<h2>Correct!</h2>");
			rightAnswer ++;
		} else {
			$("#question").append("<h2>Oops!</h2>");
			$("#question").append("<p>The correct answer is: <br>" + curQuestion.choices[correctAnswer] + "</p>");

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