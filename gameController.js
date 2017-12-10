var exports = module.exports = {};



function getGameSettings() {
	this.players=[];
	this.profession;
	this.money;
	this.startMonth;
}

exports.gameSettings= new getGameSettings();
 

exports.startGameScreens = [];

var startGame1 = "<p>You may: </p>"
+ "<span id=\"bankerMenuItem\">Be a Banker from Boston</span> <br/>"
+ "<span id=\"carpenterMenuItem\">Be a carpenter from Ohio</span> <br/>"
+ "<span id=\"farmerMenuItem\">Be a farmer from Illinois</span> <br/>"
+ "<span id=\"differentMenuItem\">Find out the differences between the choices</span> <br/>"
+ "<div id=\"selectOption\">What is your choice?</div>"
+ "<input id= 'player'  type = 'button' value= 'next'></input>";




var startGame2 = "<p id='player'>What is the name of your wagon leader?</p>" 
+ "<label id = 'wagonLeader'>Leader name</label>"
+ "<input type ='text' id= 'wagonLeader'></input>"
+ "<input id = 'leaderButton' type = 'button' value = 'next'  ></input>";


var startGame3 = "<p> What are the first names of the other members of your party? </p>"
+ "First player <input id=\"player1\"> </input> <br/>"
+ "Second player <input id=\"player2\"></input> <br/>"
+ "Third player <input id=\"player3\"></input><br/>"
+ "Fourth player <input id=\"player4\"></input></br/>"
+ "<input id = 'playerButton' type = 'button' value = 'next'> </input>";


var startGame4 = "<p> It is important to figure out where to start traveling. </p>"
+ "<p> If you go out too early, there won't be enough grass for the oxen to eat.  If you go out too late, Winter will hit you and you will be stuck in a snow storm.</p>"
+ "<span id=\"monthMarch\"> March </span><br/>"
+ "<span id=\"monthApril\"> April </span><br/>" 
+ "<span id=\"monthMay\"> May </span><br/>"
+ "<span id=\"monthJune\> June </span><br/>"
+ "<span id=\"monthJuly\> July </span></br>"
+ "<span id=\"monthAugust\> August </span></br>"
+ "<div id=\"selectOption\" name = 'month'> What is your choice? </div>"
+ "<input id = 'monthButton' type = 'button' value = 'next'> </input>";


var startGame5 = "<hr>"
+"<ul onload='getHealthAlert();'>"
+  "<li>Days on the trail: </li>"
+  "<li>Miles Traveled: </li>"
+  "<li>Current Weather: </li>"
+  "<li>Current Health: </li>"
+  "<li id='p'>Current Pace: </li>"
+  "<li>Current Terrain: </li>"
+  "<li># of Party Members: </li>"
+"</ul>";
exports.startGameScreens.push(startGame5);

var startGame6 = "<h2>Change Pace</h2>"
+"<p>The pace at which you travel can change.  Your choices are the following:  Click your desired choice.</p>"
+"<ul>"
+ 	"<li id='s'>Steady</li>"
+ 	"<li id='st'>Strenuous</li>"
+ 	"<li id='g'>Grueling</li>"
+ 	"<li id='r'>Resting</li>"
+"</ul>";
exports.startGameScreens.push(startGame6);

//new weather algorithim


var weatherConditions = [
  'Very Hot',
	'Hot',
	'Warm',
	'Cool',
	'Cold',
	'Very Cold',
	'Rain',
	'Heavy Rain',
	'Snow',
	'Blizzard',
	'Heavy Fog'
]

function newWeatherCondtion(){
	var randomWeather = Math.floor(Math.random() * (weatherConditions.length));
	document.getElementById('weatherDisplay').innerHTML = weatherConditions[randomWeather];
}












exports.startGameScreens.push(startGame1);
exports.startGameScreens.push(startGame2);
exports.startGameScreens.push(startGame3);
exports.startGameScreens.push(startGame4);
exports.startGameScreens.push(startGame5);
exports.startGameScreens.push(getGameSettings());





//push all start game screens into array as previous line does.
