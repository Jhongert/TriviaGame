/*questions is an array of objects
  property choices is an array inside config
  property answer is the correct answer inside array choices
  	note that answer start with index 0, this way answer: 2 is the index 2 in the array
*/
var config = [
	{
		question: 'What is the name of Han Solo\’s ship?',
		choices:['Star Destroyer', 'Tantive IV', 'Millennium Falcon', 'Death star'],
		answer: 2
	},

	{
		question: 'What is the weapon used by Jedi Knights?',
		choices: ['Sword', 'Lightsaber', 'Gun', 'Knife'],
		answer: 1
	},

	{
		question: 'Which young Jedi Knight becomes Darth Vader in Star Wars?',
		choices:['Kylo Ren', 'Yoda', 'Luke Skywalker', 'Anakin Skywalker'],
		answer: 3
	},

	{
		question: 'What Wookiee is Han Solo’s loyal friend and first mate?',
		choices:['Chewie', 'Wanpa', 'Watto', 'Sebulba'],
		answer: 0
	},

	{
		question: 'Who is Luke and Leia’s mother?',
		choices: ['Rey', 'Padme Amidala', 'Aayla Secura', 'Asajj Ventress'],
		answer: 1
	},

	{
		question: 'How many members are there in the Jedi Council?',
		choices:['12', '32', '8', '15'],
		answer: 0
	},

	{
		question: 'In the Star Wars film, what invisible power binds the galaxy together?',
		choices:['A laser','The Fire','The Force','The starship'],
		answer: 2
	},

	{
		question: 'What is Yodaʼs last name?',
		choices:['The master','He doesnʼt have one','Dameron','Cody'],
		answer: 1
	},

	{
		question: 'What do Han and Luke ride in the Snow on Hoth?',
		choices: ['Millennium Falcon', 'X-wing', 'Tauntaum', 'Motorcycle'],
		answer: 2
	},

	{
		question: 'Who kills Jaba the Hutt?',
		choices:['Lando',' Nien Numb','Zukuss','Princess Leia?'],
		answer: 3
	},

	{
		question: 'What planet is home to Chewbacca and the Wookiees?',
		choices:['Dagobah','Alderaan','Mars','Kashyyyk'],
		answer: 3
	},

	{
		question: 'How old is Yoda when he dies?',
		choices:['700', '900', '59', '490'],
		answer: 1
	},

	{
		question: 'Han Solo upgraded his beloved Millennium Falcon from which stock starship?',
		choices:['The YT-1300 stock light freighter', 'X-wing', 'The YT-1200', 'Millennium Falcon 2'],
		answer: 0
	},

	{
		question: 'What color is Yoda’s lightsaber in Attack of the Clones and Revenge of the Sith?',
		choices:['Red', 'Blue','Green', 'White'],
		answer: 2
	},

	{
		question: 'Who preceded Senator Palpatine as Chancellor of the Galactic Senate?',
		choices:['Dengar','General Hux','Chancellor Valorum', 'Admiral Ackbar'],
		answer: 2
	},

	{
		question: 'How many engines are on an X-wing fighter?',
		choices:['4','8','6','2'],
		answer: 0
	},

	{
		question: 'Bail Organa is Princess Leia’s adoptive father. What is her adoptive mother’s name?',
		choices:['Mon Mothma',
				 'Queen Leia',
				 'Padme Amidala',
				 'Queen Breha Organa'],
		answer: 3
	},

	{
		question: 'Whose DNA were the clones made from?',
		choices:['Darth Maul',
				 'Anakin Skywalker',
				 'Jango Fett',
				 'Padme Amidala'],
		answer: 2
	},

	{
		question: 'What is the secret weapon the geonosians planned to make?',
		choices:['A thermal detonator','The Death Star','A cannon','A rocket'],
		answer: 1
	},

	{
		question: 'What was the name of the planet that the clones were made on?',
		choices:['Kamino', 'Alderaan', 'Dagobah', 'Kashyyyk'],
		answer: 0
	},

	{
		question: 'What does Padme name her two children before she dies??',
		choices:['Lucas and Luke', 'Luke and Leia', 'Lisa and Luke', 'Luke and Martha'],
		answer: 1
	},

	{
		question: 'Who kills Greedo in the Mos Eisley Cantina?',
		choices:['Han Solo', 'Palpatine', ' Grand Moff Tarkin', 'Beru Lars'],
		answer: 0
	},
]