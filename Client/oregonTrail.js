const express = require('express')
const app = express()
const port = 1337
app.use(express.static('public'))
app.get('/', (req, res) => res.send("hello"))

app.listen(port, () => console.log(`Example app listening at http://localhost:1337`))

app.get('/index', function(req, res)  {
	res.sendFile('/views/index.html', {root: __dirname })
})
app.get('/mainmenu', function (req, res) {
	res.sendFile('/views/mainmenu.html', {root: __dirname })
})
app.get('/game', function (req, res) {
	res.sendFile('/views/game.html', {root: __dirname })
})
app.get('/aboutTrail', function (req, res) {
	res.sendFile('/views/aboutTrail.html', {root: __dirname })
})
app.get('/topten', function (req, res) {
	res.sendFile('/views/topten.html', {root: __dirname })
})
/*
app.get('/topten', function (req, res) {
	res.sendFile('/JS/topten.js', {root: __dirname })
})*/
app.get('/index', function (req, res) {
	res.sendFile('/Client/index.js', {root: __dirname })
})
app.get('/mainmenu', function (req, res) {
	res.sendFile('/Client/mainmenu.js', {root: __dirname })
})
/*app.get('/global', function (req, res) {
	res.sendFile('public/global.js', {root: __dirname })
})
app.get('editor', function (req, res) {
	res.sendFile('public/style/editor.css', {root: __dirname })
})
app.get('editor2', function (req, res) {
	res.sendFile('public/style/editor2.css', {root: __dirname })
})
app.get('/DKEYS', function (req, res) {
	res.sendFile('public/music.mp3', {root: __dirname })
})
app.get('/oregonTrail', function (req, res) {
	res.sendFile('public/Images/oregonTrail.jpg', {root: __dirname })
})
app.get('/trail',function (req,res)	{
	res.sendFile('views/Trail.html', {root:__dirname })
	})
var game = require('./gameController.js');

app.get('/game/getNewGameScreen/:screenId', function (req, res) {

var gameScreen = game.startGameScreens[req.params.screenId];
	//res.sendFile('public/Images/oregonTrail.jpg', {root: __dirname })
	res.setHeader('Content-Type','text/html');
	res.send(gameScreen);
});
app.get('/game/saveProfession/:profession', function (req,res)	{
	game.gameSettings.playerProfession = req.params.profession;
	if(game.gameSettings.playerProfession == 'banker'){
		game.gameSettings.playerMoney = 2000;
		}
	else if(game.gameSettings.playerProfession == 'carpenter'){
		game.gameSettings.playerMoney = 1750;
		}
	else{
		game.gameSettings.playerMoney = 1500;
		}
		res.setHeader('Content-Type','text/html');
		res.send(game.gameSettings.playerProfession);
		})
app.get('/game/savePlayerNames/:playerId/:playerName', function(req,res) {
	game.gameSettings.players[req.params.playerId] = req.params.playerName;
	res.setHeader('Content-Type','text/html');
	res.send(game.gameSettings.players);
	})

app.get('/game/saveMonth/:startMonth', function(req,res) {
	game.gameSettings.startMonth = req.params.startMonth;
	res.setHeader ('Content-Type', 'text/html');
	res.send(game.gameSettings.months);
	})
app.get('/game/getSettings', function(req,res) {
	res.setHeader ('Content-Type' , 'application/json');
	res.send(game.gameSettings);
	})
	*/

app.get('/Client/Trail.js', function(req,res) {
	res.setHeader ('Content-Type' , 'application/json');
	res.send(Trail.getTrail);
	})


/**/
