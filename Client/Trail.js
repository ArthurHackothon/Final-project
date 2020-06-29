
function trailScreen(nextDay) {
	
	// make asynchronous call to server to get requested trailScreen html
	
	fetch('/trail/Trail.html' + nextDay).then(function(response)	{
	if (response.status !== 200) {
		console.log('problem with ajax call!' + response.status + "msg" + response.value);
		return;
	}

var health = 100;
var healthEffect = 0;
var miles = 0;
var milesTraveled = 0;
var pace = 0;
var days = 0;



function choosePic() {
	
	var myPix = new Array("../images/desert.jpg","../images/forest.jpg","../images/grasslands.jpg","../images/mountains.jpg","../images/plains.jpg");
	var randomNum = Math.floor(Math.random() * myPix.length);
	//var randomNum = 4;
	document.getElementById("myPicture").src = myPix[randomNum];
	alert(randomNum);
	if (randomNum == 0) {
		document.getElementById('DisplayTerrain').innerHTML='Desert';
	}
	if (randomNum == 1){
		document.getElementById('DisplayTerrain').innerHTML='Forest';
	}
	if (randomNum == 2){
		document.getElementById('DisplayTerrain').innerHTML='Grasslands';
	}
	if (randomNum == 3){
		document.getElementById('DisplayTerrain').innerHTML='Mountains';
	}
	if (randomNum == 4){
		document.getElementById('DisplayTerrain').innerHTML='Plains';
	}
}









/**** spacebar function ******/
function nextpart() {
	document.body.onkeyup = function spacebar(e){
		  if(e.keyCode == 32){
			  weatherChecker();
				days = 0; // should be var not int
	      days++;
			}
			document.getElementById('dayCounter').innerHTML = days;
	}
}






	response.text().then(function(data) {
		trailContainer.innerHTML = data;
		})
	})
}


function newWeatherCondtion(){
	var randomWeather = Math.floor(Math.random() * (weatherConditions.length));
	document.getElementById('weatherDisplay').innerHTML = weatherConditions[randomWeather];
}

function weatherChecker(){
	var random1 = Math.floor(Math.random() * ((10-2)+1) + 2);
  var random2 = Math.floor(Math.random() * 9 + 2);
  var result = random1 + random2;

	if((result >= 0) && (result <= 5)){
		var weatherCondtion1 = ['Heavy Rain', 'Snow', 'Blizzzard', 'Heavy Fog'];
		var randomWeather1 = Math.floor(Math.random() * (weatherCondtion1.length));
		document.getElementById('weatherDisplay').innerHTML = weatherCondtion1[randomWeather1];
		//var healthEffect = 0;
		//var milesTraveled = 0;

		if (randomWeather1 == 1) {
			healthEffect  = health - 8;
			milesTraveled = miles + .05 ;
		}else if (randomWeather1 == 2) {
			healthEffect = health - 15;
			milesTraveled = miles + .3;
		}else if (randomWeather1 == 3) {
			healthEffect = health - 30;
			milesTraveled = miles + .1;
		}else if (randomWeather1 == 4) {
			healthEffect = health - 3;
			milesTraveled = miles + .5;
		}
		document.getElementById('currentHealth').innerHTML = healthEffect;
		document.getElementById('mileCounter').innerHTML = milesTraveled;
	}
	if((result >= 6) && (result <= 16)){
		var weatherCondtion2 = ['Very Hot', 'Hot', 'Cool', 'Cold','Very Cold', 'Rain'];
		var randomWeather2 = Math.floor(Math.random() * (weatherCondtion2.length));
		document.getElementById('weatherDisplay').innerHTML = weatherCondtion2[randomWeather2];
		//var healthEffect = 0;
		if (randomWeather2 == 1) {
			healthEffect  = health - 8;
			milesTraveled = miles + .7;
		} else if (randomWeather2 == 2){
			healthEffect  = health - 3;
			milesTraveled = miles + .9;
		} else if (randomWeather2 == 3){
			healthEffect  = health + 1;
			milesTraveled = miles + .95;
		} else if (randomWeather2 == 4){
			healthEffect  = health - 5;
			milesTraveled = miles + .8;
		} else if (randomWeather2 == 5){
			healthEffect  = health - 12;
			milesTraveled = miles + .7;
		} else if (randomWeather2 == 6){
			healthEffect  = health - 4;
			milesTraveled = miles + .6;
		}
		document.getElementById('currentHealth').innerHTML = healthEffect;
		document.getElementById('mileCounter').innerHTML = milesTraveled;
	}
	if((result >= 6) && (result <= 26)){
		document.getElementById('weatherDisplay').innerHTML = 'Warm';
		if (health < 100 ){
			healthEffect = health + 8;
			document.getElementById('currentHealth').innerHTML = healthEffect;
	}
		if (health === 100) {
			document.getElementById('currentHealth').innerHTML = health;
		}
		milesTraveled = miles + 1;
		document.getElementById('mileCounter').innerHTML = milesTraveled;
	}
}














