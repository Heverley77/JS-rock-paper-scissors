function computerPlay(){
    let comChoice = ["Rock", "Paper", "Scissors"];
    return comChoice[Math.floor(Math.random()*comChoice.length)];
}

function playRound(playerChoice, comChoice){

    if (playerChoice == "Rock" && comChoice == "Scissors" ||
        playerChoice == "Paper" && comChoice == "Rock" ||
        playerChoice == "Scissors" && comChoice == "Paper"){

            return 'Win';

    }else if(playerChoice == "Rock" && comChoice == "Paper" ||
             playerChoice == "Paper" && comChoice == "Scissors" ||
             playerChoice == "Scissors" && comChoice == "Rock"){

            return 'Lose';

    }else{
        return 'Tie';
    }

} 

let playerWins = 0;
let comWins = 0;
let ties = 0;

const Rbtn = document.querySelector('#Rbtn');
const Pbtn = document.querySelector('#Pbtn');
const Sbtn = document.querySelector('#Sbtn');
const pCount = document.querySelector('#pCount');
const cCount = document.querySelector('#cCount');
const tCount = document.querySelector('#tCount');

pCount.textContent = 'Wins: ' + playerWins;
cCount.textContent = 'CPU Wins: ' + comWins;
tCount.textContent = 'Ties: ' + ties;

Rbtn.addEventListener('click', () => {
    let Player = 'Rock';
    let play = playRound(Player, computerPlay());

    if (play == 'Win'){
        playerWins += 1;
        pCount.textContent = 'Wins: ' + playerWins;
    }else if(play == 'Lose'){
        comWins += 1;
        cCount.textContent = 'CPU Wins: ' + comWins;
    }else{
        ties += 1;
        tCount.textContent = 'Ties: ' + ties;
    }

    if(playerWins == 5){
        playerWins = 0;
        comWins = 0;
        ties = 0;
        pCount.textContent = 'Wins: ' + playerWins;
        cCount.textContent = 'CPU Wins: ' + comWins;
        tCount.textContent = 'Ties: ' + ties;
        alert("YOU WIN!!");
    }else if(comWins == 5){
        playerWins = 0;
        comWins = 0;
        ties = 0;
        pCount.textContent = 'Wins: ' + playerWins;
        cCount.textContent = 'CPU Wins: ' + comWins;
        tCount.textContent = 'Ties: ' + ties;
        alert('You lost.');
    }
});

Pbtn.addEventListener('click', () => {
    let Player = 'Paper';
    let play = playRound(Player, computerPlay());

    console.log(play);

    if (play == 'Win'){
        playerWins += 1;
        pCount.textContent = 'Wins: ' + playerWins;
    }else if (play == 'Lose'){
        comWins += 1;
        cCount.textContent = 'CPU Wins: ' + comWins;
    }else{
        ties += 1;
        tCount.textContent = 'Ties: ' + ties;
    }

    if(playerWins == 5){
        playerWins = 0;
        comWins = 0;
        ties = 0;
        pCount.textContent = 'Wins: ' + playerWins;
        cCount.textContent = 'CPU Wins: ' + comWins;
        tCount.textContent = 'Ties: ' + ties;
        alert("YOU WIN!!");
    }else if(comWins == 5){
        playerWins = 0;
        comWins = 0;
        ties = 0;
        pCount.textContent = 'Wins: ' + playerWins;
        cCount.textContent = 'CPU Wins: ' + comWins;
        tCount.textContent = 'Ties: ' + ties;
        alert('You lost.');
    }
});

Sbtn.addEventListener('click', () => {
    let Player = 'Scissors';
    let play = playRound(Player, computerPlay());

    if (play == 'Win'){
        playerWins += 1;
        pCount.textContent = 'Wins: ' + playerWins;
    }else if (play == 'Lose'){
        comWins += 1;
        cCount.textContent = 'CPU Wins: ' + comWins;
    }else{
        ties += 1;
        tCount.textContent = 'Ties: ' + ties;
    }

    if(playerWins == 5){
        playerWins = 0;
        comWins = 0;
        ties = 0;
        pCount.textContent = 'Wins: ' + playerWins;
        cCount.textContent = 'CPU Wins: ' + comWins;
        tCount.textContent = 'Ties: ' + ties;
        alert("YOU WIN!!");
    }else if(comWins == 5){
        playerWins = 0;
        comWins = 0;
        ties = 0;
        pCount.textContent = 'Wins: ' + playerWins;
        cCount.textContent = 'CPU Wins: ' + comWins;
        tCount.textContent = 'Ties: ' + ties;
        alert('You lost.');
    }
});


