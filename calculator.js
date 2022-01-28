let oldNum, newNum, currOp;
oldNum = 0;

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "x":
            return a * b;
        case "/":
            return a / b;
        case "1/x":
            return 1 / a;
        case "x^2":
            return a * a;
        case "sqrt(x)":
            return Math.sqrt(a);
        case "%":
            return a % b;
        default:
            return a;
    }
}

const inputScreen = document.getElementById("input-screen");
const outputScreen = document.getElementById("output-screen");

const numButtons = [...document.querySelectorAll(".num-btn")];
numButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        // PRESS NUM BUTTON
        inputScreen.innerText += button.innerText;
    });
});

const operatorButtons = [...document.querySelectorAll(".operator-btn")];
operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
    // console.log(eq);

    if (oldNum == 0) {
        oldNum = parseInt(inputScreen.innerText);
    }

    if (button.classList.contains("selfop")) {

    } else {
        currOp = button.innerText;
        outputScreen.innerText = oldNum + button.innerText;
        inputScreen.innerText = "";
    }
    });
});

const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", (e) => {
    oldNum = newNum = 0;
    inputScreen.innerText = outputScreen.innerText = currOp = "";
});

const clearEqButton = document.getElementById("clear-eq-btn");
clearEqButton.addEventListener("click", (e) => {
    inputScreen.innerText = "";
});

const deleteButton = document.getElementById("delete-btn");
deleteButton.addEventListener("click", (e) => {
    inputScreen.innerText = inputScreen.innerText.slice(0, -1);
});

const equalButton = document.getElementById("equal-btn");
equalButton.addEventListener("click", (e) => {

    // (parseInt(inputScreen.innerText) != NaN) ? oldNum = operate(oldNum, parseInt(inputScreen.innerText), currOp) : oldNum = operate(oldNum, null, currOp);
    console.log(oldNum, parseInt(inputScreen.innerText));
    oldNum = operate(oldNum, parseInt(inputScreen.innerText), currOp);
    outputScreen.innerText += `${inputScreen.innerText}=${oldNum}`;
    inputScreen.innerText = ""
});