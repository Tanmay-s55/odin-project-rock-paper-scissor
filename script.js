var playerScore=0;
var computerScore=0;
var choices = ['rock','paper','scissor'];
var rockEl = document.getElementById('rock');
var paperEl = document.getElementById('paper'); 
var scissorEl = document.getElementById('scissor'); 
var scoreEl = document.getElementById('score');
var resultEl = document.getElementById('final-result');
var roundEl = document.getElementById('round-score');
var resetEl = document.getElementById('reset-btn');
var cmprck = document.getElementById('crock');
var cmppr = document.getElementById('cpaper');
var cmpsc = document.getElementById('cscissor');

resetEl.addEventListener('click',resetGame);
rockEl.addEventListener('click',(event) => beginGame(event));
paperEl.addEventListener('click',(event) => beginGame(event));
scissorEl.addEventListener('click',(event) => beginGame(event));

function beginGame(choice){
        var userChoice = choice.target.id;
        var option = getComputerChoice();
        var computerChoice = choices[option];

        var winner = checkWinner(userChoice,computerChoice);
        displayComputer(computerChoice);
        if(winner === "Player"){
            roundResult(`${userChoice} beats ${computerChoice}`);
            playerScore++;
            updateScore();
        }else if(winner === "Computer"){
            roundResult(`${computerChoice} beats ${userChoice}`);
            computerScore++;
            updateScore();
        }else{
            roundResult("It's a tie!");
        }
    if(playerScore==5 || computerScore==5){
        if(playerScore > computerScore){
            updateResult("Player Wins 🎉🎉🎉");
        }
        else{
            updateResult("Computer Wins 🎉🎉🎉");
        }
    }
}

function checkWinner(choice1,choice2){
    if(choice1==='rock' && choice2=='scissor'){
        return 'Player';
    }else if(choice2==='rock' && choice1=='scissor'){
        return 'Computer';
    }else if(choice1==='rock' && choice2=='paper'){
        return 'Computer';
    }else if(choice2==='rock' && choice1=='paper'){
        return 'Player';
    }else if(choice1==='paper' && choice2=='scissor'){
        return 'Computer';
    }else if(choice1==='scissor' && choice2=='paper'){
        return 'Player';
    }else{
        return "Nothing";
    }
}

function getComputerChoice(){
    var choiceGenerated = Math.floor(Math.random()*3);
    return choiceGenerated;
}

function displayComputer(c){
    if(c==='all'){
        cmprck.classList.remove('selected-btn');
        cmppr.classList.remove('selected-btn');
        cmpsc.classList.remove('selected-btn');
    }
    else if(c==='rock'){
        cmprck.classList.add('selected-btn');
        cmppr.classList.remove('selected-btn');
        cmpsc.classList.remove('selected-btn');
    }else if(c==='paper'){
        cmprck.classList.remove('selected-btn');
        cmppr.classList.add('selected-btn');
        cmpsc.classList.remove('selected-btn');
    }else{
        cmprck.classList.remove('selected-btn');
        cmppr.classList.remove('selected-btn');
        cmpsc.classList.add('selected-btn');
    }
}

function updateScore(){
    scoreEl.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`
}

function roundResult(result){
    roundEl.textContent = result;
}

function updateResult(msg){
        resultEl.textContent = msg;
}

function resetGame(){
    playerScore=0;
    computerScore=0;
    roundEl.textContent = "";
    updateScore();
    updateResult(" ");
    displayComputer("all");
}