const form = document.querySelector('form');
const title = document.querySelector('#title');
const startButton = document.querySelector('#startButton');
const quitButton = document.querySelector('#quitButton');
const performanceButton = document.querySelector('#performance');
const statsButton = document.querySelector('#statsButton');
const statsContainer = document.querySelector('#statsContainer');
const gameContent = document.querySelector('#gameContent');
const ansContainer = document.querySelector('#ansContainer');
const rightList = document.querySelector('#rightList');
const wrongList = document.querySelector('#wrongList');
const answer = document.querySelector('#answer');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const sign = document.querySelector('#sign');
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const right = document.querySelector('#right');
const total = document.querySelector('#total');
const percentage = document.querySelector('#percentage');
let totalCount = 0;
let rightCount = 0;

startButton.addEventListener('click', function (e) {
    e.preventDefault();

    if (filterCheckBox().length === 0) {
        alert('Please select an operator.');
    }

    form.classList.toggle('hidden');
    ansContainer.classList.toggle('hidden');
    gameContent.classList.toggle('hidden');
    statsContainer.classList.toggle('hidden');
    fullEquation();

    if (form.game.value === 'minute') {
        countDown();
    }
})

quitButton.addEventListener('click', function (e) {
    e.preventDefault();
    form.classList.toggle('hidden');
    ansContainer.classList.toggle('hidden');
    statsContainer.classList.toggle('hidden');
    gameContent.classList.toggle('hidden');
    removeAllChildNodes();
    resetNumsBoxes();
})

performanceButton.addEventListener('click', function () {
    if (ansContainer.style.height === '0px' || ansContainer.style.height === '') {
        ansContainer.style.height = '350px';
        ansContainer.style.border = '1px solid #333333';
        ansContainer.style.boxShadow = '2px 2px black';
    }
    else {
        ansContainer.style.height = '0px';
        ansContainer.style.border = 'none';
    }
})

statsButton.addEventListener('click', function () {
    if (statsContainer.style.height === '0px' || statsContainer.style.height === '') {
        statsContainer.style.height = '140px';
        statsContainer.style.border = '1px solid black';
        statsContainer.style.boxShadow = '2px 2px black';
    }
    else {
        statsContainer.style.height = '0px';
        statsContainer.style.border = 'none';
    }
})

answer.addEventListener('submit', function (e) {
    e.preventDefault();
    const correctAnswer = Math.floor(eval(`parseInt(num1.innerText) ${sign.innerText} parseInt(num2.innerText)`)); // Math.floor for the division
    const userInput = parseInt(answer.number.value);
    const string = `${num1.innerText} ${sign.innerText} ${num2.innerText}`;
    const li = document.createElement('li');
    li.classList.add('listStyle');
    li.append(string);

    if (userInput === correctAnswer) {
        rightList.append(li);
        rightCount++;
        totalCount++;
        right.innerText = `${rightCount}`;
        total.innerText = `${totalCount}`;
    }
    else {
        wrongList.append(li);
        totalCount++;
        total.innerText = `${totalCount}`;
    }

    percentage.innerText = Math.round(eval(`${rightCount}/${totalCount}`) * 100);
    fullEquation();
    answer.number.value = '';
})

function randNum(num) {
    if (num === 1) {
        return Math.floor(Math.random() * 9) + 1 // gives numbers 1-9 (single digit)
    }
    else if (num === 2) {
        return Math.floor(Math.random() * 90) + 10 // gives numbers 10-99 (double digit)
    }
}

function difficultySetting() {
    const difficulty = form.difficulty.value;

    if (difficulty === "easy") {
        return [randNum(1), randNum(1)]
    }
    else if (difficulty === "normal") {
        return [randNum(2), randNum(1)]
    }
    else {
        return [randNum(2), randNum(2)]
    }
}

function filterCheckBox() {
    const checkedOperators = [];

    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) { // gets checked operators
            checkedOperators.push(checkBoxes[i].value);
        }
    }

    return checkedOperators
}

function randOperator() {
    const pickedOperators = filterCheckBox();
    const numOperators = pickedOperators.length;
    const randNum = Math.floor(Math.random() * numOperators); // 0-2 random operators

    for (let i = 0; i < numOperators; i++) {
        if (randNum === i) {
            return pickedOperators[i]
        }
    }
}

function fullEquation() {
    const operator = randOperator();
    const nums = difficultySetting();

    num1.innerText = nums[0];
    num2.innerText = nums[1];
    sign.innerText = operator;
}

function countDown() {
    let timeLeft = 60;

    let countdown = setInterval(() => {
        title.innerText = `Time left: ${timeLeft}`;
        if (form.classList.value === '') {
            clearInterval(countdown);
            title.innerText = 'Math Whiz';
        }
        else if (timeLeft <= 0) {
            clearInterval(countdown);
            answer.classList.add('hidden');
            title.innerText = "Time's up! Try again?";
        }
        timeLeft -= 1;
    }, 1000)
}

function resetNumsBoxes() {
    totalCount = 0;
    rightCount = 0;
    wrongCount = 0;
    total.innerText = 0;
    right.innerText = 0;
    percentage.innerText = 0;
    ansContainer.style.height = '0px';
    ansContainer.style.border = 'none';
    statsContainer.style.height = '0px';
    statsContainer.style.border = 'none';
    answer.classList.remove('hidden');
    title.innerText = 'Math Whiz';
}

function removeAllChildNodes() {
    while (rightList.firstChild) {
        rightList.removeChild(rightList.firstChild);
    }

    while (wrongList.firstChild) {
        wrongList.removeChild(wrongList.firstChild);
    }
}