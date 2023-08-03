const num1 = Math.floor(Math.random()*10);
const num2 = Math.floor(Math.random()*10);

const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} multipy by ${num2}?`;

//console.log(num1 * num2);
const correctAnswer = num1 * num2;

const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");

let btnEl = document.getElementById("btn");

let score = 0;

btnEl.addEventListener("click", () => {
    
    const userInput = parseInt(inputEl.value);
    console.log(userInput);
    if (userInput === correctAnswer){
        score++;
        console.log(score);
    }else{
        score--;
        console.log(score);
    }
})



