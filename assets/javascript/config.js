/*questions is an array of objects
  property choices is an array inside config
  property answer is the correct answer inside array choices
  	note that answer start with index 0, this way answer: 2 is the index 2 in the array
*/
var config = [
	{
		question: 'How does a WHILE loop start?',
		choices:['while(i = 0)', 'while(i <= 10; i++)', 'while(i <> 10)', 'while(i != 10)'],
		answer: 3
	},

	{
		question: 'Which operator is used to assign a value to a variable?',
		choices: ['==', '=', '+', '!='],
		answer: 1
	},

	{
		question: 'How do you round the number 6.8, to the nearest integer?',
		choices:['round(6.8)', 'math.Round(6.8)', 'Round(6.8)', 'Math.round(6.8)'],
		answer: 3
	},

	{
		question: 'How can you add a comment in a JavaScript?',
		choices:['&lt;!--Comment--&gt;', '/*Comment', '"Comment"', '//Comment'],
		answer: 3
	},

	{
		question: 'How do you declare a JavaScript variable?',
		choices: ['variable name', 'var name', 'var = name', 'name is var'],
		answer: 1
	},

	{
		question: 'How does a FOR loop start?',
		choices:['for (i = 0; i <= 3; i++)', 'for (i == 3; i++)', ' for i = 1 to 3', 'for (i = 0; i <= 3)'],
		answer: 0
	},

	{
		question: 'Which of the following is not a valid JavaScript variable name?',
		choices:['_first_name','firstName','2name','name2'],
		answer: 2
	},

	{
		question: 'What is the correct JavaScript syntax to write "Hello World"?',
		choices:['Print("Hello World")','document.write("Hello World")','write("Hello World")','document.print("Hello World")'],
		answer: 1
	},

	{
		question: 'How to write an IF statement for executing some code if "y" is different to 6?',
		choices: ['if(y <> 6)', 'if y <> 6', 'if(y != 6)', 'if(y not 6)'],
		answer: 2
	},

	{
		question: 'Inside which HTML element do we put the JavaScript?',
		choices:['&lt;scripting&gt;','&lt;js script&gt;','&lt;javascript&gt;','&lt;script&gt;'],
		answer: 3
	},

	{
		question: 'What is the correct syntax for referring to an external script called "app.js"?',
		choices:['&lt;script name="app.js"&gt;','&lt;script href="app.js"&gt;','&lt;script src:"app.js"&gt;','&lt;script src="app.js"&gt;'],
		answer: 3
	},

	{
		question: 'Which is the correct way to write a JavaScript array?',
		choices:['var a = array("a1", "a2")', 'var a = ["a1", "a2"]', 'var a = {"a1", "a2"}', 'var a:["a1", "a2"]'],
		answer: 1
	},

	{
		question: 'JavaScript is interpreted by',
		choices:['Client', 'Server', 'Object', 'None of above'],
		answer: 0
	},

	{
		question: 'This method adds and/or removes elements from an array.',
		choices:['reverse', 'push','splice', 'join'],
		answer: 2
	},

	{
		question: 'document.write(4 + "4"); output',
		choices:['8','4','44', 'error'],
		answer: 2
	},

	{
		question: 'Which built-in method convert a string to lower case?',
		choices:['toLowerCase()','toLower()','upperToLower()','lowerCase()'],
		answer: 0
	},

	{
		question: 'What is the correct JavaScript syntax to select an element with id="main"',
		choices:['document.getElementByName("#main");',
				 'document.getelementeyId("main");',
				 'document.getElement("main");',
				 'document.getElementById("main");'],
		answer: 3
	},

	{
		question: 'Where is the correct place to insert a JavaScript script?',
		choices:['The &lt;head&gt; section',
				 'The &lt;body&gt; section',
				 'The &lt;head&gt; and &lt;body&gt; section',
				 'Between the &lt;head&gt; and &lt;body&gt;'],
		answer: 2
	},

	{
		question: 'How do you write "Hello World" in an alert box?',
		choices:['alertBox("Hello World")','alert("Hello World")','message("Hello World")','document.alert("Hello World")'],
		answer: 1
	},

	{
		question: ' How do you create a function in JavaScript?',
		choices:['function myFunction()', 'function = myFunction()', 'function:myFunction()', ' new function myFunction()'],
		answer: 0
	},

	{
		question: 'How do you call a function named "myFunction"?',
		choices:['call myFunction()', 'myFunction()', 'function myFunction()', 'myfunction()'],
		answer: 1
	},

	{
		question: 'How to write an IF statement in JavaScript?',
		choices:['if(x == 8)', 'if x == 8 then', 'if(x = 8)', 'if{x == 8}'],
		answer: 0
	},
]