var activePlayer, dice, dices, gamePlaying, lastRoll, roundScore, scores;

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// document.querySelector('.btn-roll').addEventListener('click', testButton);

/*
function testButton(){
    console.log('Button clicked');
}
*/


initGame();

/**
 * Query Selector and addEventListener
 * '.' for Classes & '#' for IDs
 * For the event listener we define the event we wait and the callback function we use
 */
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        var winningScore = document.getElementById('input-score').value;
        console.log(winningScore);

        winningScore.empty() ? winningScore = 100 : winningScore;

        if (scores[activePlayer] < winningScore) {
            nextPlayer();
        } else {
            document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.duno').style.display = 'none';
            document.querySelector('.ddos').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

            gamePlaying = false;
        }
    } else {
        initGame();
    }
});

document.querySelector('.btn-new').addEventListener('click', initGame);

document.querySelector('.btn-roll').addEventListener('click', function () {
    if(gamePlaying){
        dices = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];

        document.querySelector('.duno').style.display = 'block';
        document.querySelector('.ddos').style.display = 'block';

        document.querySelector('.duno').src = 'dice-' + dices[0] + '.png';
        document.querySelector('.ddos').src = 'dice-' + dices[1] + '.png';

        console.log(dices);

        if ((dices[0] === 1 || dices[1] === 1) || (dices[0] === 6 && dices[1] === 6)){
            nextPlayer();
        }else {
            for (var i = 0; i < dices.length; i++){
                roundScore += dices[i];
            }
            lastRoll = dices;
        }

        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        initGame();
    }
});

/**
 * GetElementByID||CSS||NAME & classList && style.property
 * classList add and remove to add css classes to different elements
 * style.cssProperty to assign a value to it
 */
function initGame() {
    activePlayer = 0;
    dice = 0;
    dices = [0,0];
    gamePlaying = true;
    roundScore = 0;
    scores = [0,0];

    document.querySelector('.duno').style.display = 'none';
    document.querySelector('.ddos').style.display = 'none';
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('input-score').value = 100;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
}

function nextPlayer() {
    document.querySelector('.duno').style.display = 'none';
    document.querySelector('.ddos').style.display = 'none';
    document.querySelector('#current-' + activePlayer).textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    /*switch (activePlayer) {
        case 0:
            activePlayer = 1;
            break;
        case 1:
            activePlayer = 0;
            break;
    }*/

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
}