const guesses = document.querySelector('.guesses');
const quant = document.querySelector('.quant');
const status = document.querySelector('.status');
const lastResult = document.querySelector('.lastResult');

const choiceUser = document.getElementById("choiceUser");
const choiceSubmit = document.getElementById("choiceSubmit");

const resetButton = document.querySelector(".reset");

let count = 1;
resetButton.disabled = true;

const getRandom = () => {
    return Math.round(Math.random()*100);
}
const result = getRandom();
console.log(result);

//status.textContent = 'ola';

const checkGuess = () => {
    let number = Number(choiceUser.value);
    console.log(number);

    if (number < 0 || number > 100) {
        status.textContent = 'Error!! Put number between 1 and 100';
        status.style.backgroundColor = 'yellow';
        choiceUser.value = '';
        return 0;
    } 
    if (count === 1) {
        guesses.textContent = 'Previous Guesses: ';
    } 
    guesses.textContent += number + ' / ';
    if (count === 10) {
        status.textContent = 'Game Over! =(';
        status.style.backgroundColor = 'red';
        gameOver();
    } else if (number === result) {
        status.textContent = 'You WIN!! =)';
        status.style.backgroundColor = 'green';
        gameOver();
    }
    else {
        status.textContent = 'WRONG!';
        status.style.backgroundColor = 'yellow';
        if(number < result) {
            lastResult.textContent = 'Last guess was too low!';
        } else if (number > result) {
            lastResult.textContent = 'Last guess was too high!';

        }
    }
    count++;
    choiceUser.value = '';
    choiceUser.focus();
}

choiceSubmit.addEventListener('click', checkGuess);

const gameOver = () => {
    choiceUser.disabled = true;
    choiceSubmit.disabled = true;
    resetButton.disabled = false;
    resetButton.textContent = 'Star new game';
}


const resetGame = () => {
    let count = 1;
    choiceUser.disabled = false;
    choiceSubmit.disabled = false;
    choiceUser.value = '';
    const textResult = document.querySelectorAll('.textResult p');
    for(i = 0; i < textResult.length; i++){
        textResult[i].textContent = '';
        textResult[i].style.backgroundColor = 'white';
    }
    getRandom();
    resetButton.disabled = true;
}
