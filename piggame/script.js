(function() {

    "use strict";
    /* 
    This gets the player: gameData.players[gameData.index]
    This gets the first die: gameData.dice[gameData.roll1-1]
    This gets the second die: gameData.dice[gameData.roll2-1]
    This gets the score of the current player: gameData.score[gameData.index]
    */

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');
    const songBtn = document.getElementById('startgame');
    const songSound = new Audio('sounds/song.mp3');
    /* song by home- we're finally landing (royalty free planet) */
    const diceBtn = document.getElementById('roll');
    const diceSound = new Audio('sounds/diceroll.mp3');
    /* free dice roll sound effect: https://www.youtube.com/watch?v=KY4hU1BYWEc */


    const gameData = {
        dice: ['images/1die.svg', 'images/2die.svg', 'images/3die.svg',
            'images/4die.svg', 'images/5die.svg', 'images/6die.svg'
        ],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener('click', function() {
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = ' ';
        gameControl.innerHTML += '<button id="quit"></button>';

        document
            .getElementById('quit').addEventListener('click', function() {
                location.reload();
            });

        setUpTurn();
    });

    songBtn.addEventListener('mousedown', function() {
        songSound.play();
    });


    function setUpTurn() {

        actionArea.innerHTML = '<button id="roll"></button>';
        document.getElementById('roll').addEventListener('click', function() {
            diceSound.play();
            throwDice();

        });
    }

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> 
							<img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        // if two 1's are rolled...
        if (gameData.rollSum === 2) {
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        }

        // if either die is a 1...
        else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to  ${
				gameData.players[gameData.index]
			}</p>`;
            setTimeout(setUpTurn, 2000);
        }

        // if neither die is a 1...
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain"></button> <br> <button id="pass"></button>';

            document.getElementById('rollagain').addEventListener('click', function() {
                //setUpTurn();
                throwDice();
            });

            document.getElementById('pass').addEventListener('click', function() {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }

    }

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} 
			wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = '';
        } else {
            // show current score...
            showCurrentScore();
        }
    }

    function showCurrentScore() {
        score.innerHTML = `<p> <strong>
		${gameData.score[0]}  ${gameData.score[1]}</strong></p>`;

    }
}());