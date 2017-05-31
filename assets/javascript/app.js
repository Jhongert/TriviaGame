window.onload = function() {
  // Click events
  $("#play").click(game.newGame);
  $("#playAgain").click(game.reset);
  $(".choice").click(game.checkAnswer);
};

var intervalId;

var game = {
	time: 0,
	questions: [],         //A copy of config array. This array is in config.js
	level: "",	           //Nivel to play noob, pro or master
	questionNumber: 0,     //Current question number
	numberOfQuestions: 10, //Number if questions to show
	rightAnswer: 0,
	wrongAnswer: 0,
	noAnswer: 0,
	curQuestion:{},	       //Hold the current question

	newGame: function(){
		game.questions = config.slice(); //Make a copy of config array
		game.questionNumber = 0;
		game.rightAnswer = 0;
		game.wrongAnswer = 0;
		game.noAnswer = 0;
		$("#intro").hide();
		$("#gameSection").show();
		game.newQuestion();
	},

	newQuestion: function (){
		if(game.questionNumber == game.numberOfQuestions){
			game.gameOver();
		} else{
			game.setTime();
			game.questionNumber ++;
			//get a random question and put it in curQuestion var
			var randomNum = Math.floor(Math.random() * game.questions.length);
			game.curQuestion = game.questions[randomNum];

			//delete the current question from array questions, that way we don't pick it again
			game.questions.splice(randomNum,1);

			$("#msg").hide();
			$("#questionHolder").show();
			$("#question").text(game.curQuestion.question); //show current question

			//show the choices
			$(".choice").each(function(index){
				$(this).html(game.curQuestion.choices[index]);
			});

			$("#questionNumber").text(game.questionNumber);

			//start the timer
			intervalId = setInterval(game.updateTimer, 1000);
		}
	},

	gameOver: function (){
		clearInterval(intervalId);
		var q = $("#msg");
		q.html("<h1>How you did</h1>");
		q.append("<h3>Right answers: " + game.rightAnswer + "</h3>");
		q.append("<h3>Wrong answers: " + game.wrongAnswer + "</h3>");
		q.append("<h3>Unanswered: " + game.noAnswer + "</h3>");

		$("#playAgain").css("display", "block");
	},

	//Set the time depending on the selected level noob=25, pro=15 and master=10
	setTime: function (){
		game.level = $("input[name= level]:checked").val();
		if(game.level == "noob"){
			game.time = 25;
		} else if (game.level == "pro"){
			game.time = 15;
		} else{
			game.time = 10;
		}

		$("#timer").text(game.time);
	},

	updateTimer: function (){
		game.time --;
		$("#timer").text(game.time);
		if(game.time == 0){
			game.timesUp();
		}
	},

	timesUp: function (){
		clearInterval(intervalId);
		$("#questionHolder").hide();
		$("#msg").show().html("<h2>Ooh no, times up!</h2>");
		$("#msg").append("<p>The answer is: " + game.curQuestion.choices[game.curQuestion.answer] + "</p>");
		setTimeout(game.newQuestion, 4000);
		game.noAnswer ++;
	},

	reset: function(){
		$("#intro").show();
		$("#gameSection").hide();
		$("playAgain").css("display", "none");
	},

	//Check if answer is right or wrong and display a message
	checkAnswer: function(){
		clearInterval(intervalId);

		$("#questionHolder").hide();

		var answer = $(this).val(); //value property of <li> clicked
		var correctAnswer = game.curQuestion.answer;

		if(answer == correctAnswer){
			$("#msg").html("<h1 class='correct'>Correct!</h1>").show();
			game.rightAnswer ++;
		} else {
			$("#msg").html("<h1 class='wrong'>Oops!</h1>").show();
			$("#msg").append("<p>The correct answer is: <br>" + game.curQuestion.choices[correctAnswer] + "</p>");
			game.wrongAnswer ++;
		}
		setTimeout(game.newQuestion, 3000);
	}
}