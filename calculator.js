let oldNum, newNum, currOp;
oldNum = newNum = 0;

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
            if (b === NaN) {
                return b;
            } else {
                return a;
            }
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

        currOp = button.innerText;
        if (inputScreen.innerText === "") {
            
        } else {
            oldNum = parseInt(inputScreen.innerText);
        }

        outputScreen.innerText = `${oldNum} ${currOp}`;
        inputScreen.innerText = "";

        // console.log(eq);

        // if (oldNum === "") {
        //     oldNum = parseInt(inputScreen.innerText);
        // }

        // if (button.classList.contains("selfop")) {

        // } else {
        //     currOp = button.innerText;
        //     // (inputScreen.innerText) ? oldNum = parseInt(inputScreen.innerText) : oldNum = 0;
        //     if (inputScreen.innerText == "") {
        //         oldNum = parseInt(inputScreen.innerText);
        //     }
        //     else {
        //         // oldNum = 0;
        //     } 
        //     outputScreen.innerText = oldNum + button.innerText;
        //     inputScreen.innerText = "";
        // }

        // GETS OPERATION FROM BUTTON TEXT
        // currOp = button.innerText;
        
        // // When calculator first starts, if there was no other number inputted before
        // // then oldNum defaults to 0
        // if (inputScreen.innerText === "") {
        //     oldNum = 0;
        // } else {
        //     oldNum = inputScreen.innerText;
        //     inputScreen.innerText = "";
        // }

        // // Sets the equation for output screen
        // outputScreen.innerText = oldNum + button.innerText;

    });
});

const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", (e) => {
    oldNum = newNum = 0;
    inputScreen.innerText = outputScreen.innerText = currOp = "";
    enableAll(operatorButtons);
});

const clearEqButton = document.getElementById("clear-eq-btn");
clearEqButton.addEventListener("click", (e) => {
    inputScreen.innerText = "";
    enableAll(operatorButtons);
});

const deleteButton = document.getElementById("delete-btn");
deleteButton.addEventListener("click", (e) => {
    inputScreen.innerText = inputScreen.innerText.slice(0, -1);

    if (newNum === 0 && currOp === "/") inputScreen.innerText = "";;
    enableAll(operatorButtons);
});

const equalButton = document.getElementById("equal-btn");
equalButton.addEventListener("click", (e) => {

    newNum = parseInt(inputScreen.innerText);

    if (newNum === 0 && currOp === "/") { // dividing by zero case
        inputScreen.innerText = "Cannot divide by zero";
        disableAll(operatorButtons);
    } else if (inputScreen.innerText === "") { // case where no input number but press equal
        outputScreen.innerText = `${oldNum} = ${oldNum}`;
        newNum = 0;
    } else if (oldNum === 0 && newNum) {  // cases where no previous equation but has input number and press equal
            oldNum = newNum;
            newNum = 0;
            outputScreen.innerText = `${oldNum} = ${oldNum}`;
            inputScreen.innerText = "";
    } else {
        if (outputScreen.innerText === `${oldNum} = ${oldNum}`) {
            oldNum = 0
            outputScreen.innerText = ` ${newNum} = ${oldNum}`;
        } else {
            oldNum = operate(oldNum, newNum, currOp);
            outputScreen.innerText += ` ${newNum} = ${oldNum}`;
        }
        inputScreen.innerText = "";
        newNum = 0;
        currOp = "";
    }


    // (parseInt(inputScreen.innerText) != NaN) ? oldNum = operate(oldNum, parseInt(inputScreen.innerText), currOp) : oldNum = operate(oldNum, null, currOp);
    // console.log(oldNum, parseInt(inputScreen.innerText));
    // if (oldNum === "") {
    //     oldNum = inputScreen.innerText;
    // } else {
    //     // oldNum = operate(oldNum, parseInt(inputScreen.innerText), currOp);
    //     oldNum = operate(parseInt(inputScreen.innerText), oldNum, currOp);

    // }
    // currOp = "";
    // outputScreen.innerText += `${inputScreen.innerText}=${oldNum}`;
    // inputScreen.innerText = "";
});

function disableAll(buttons) {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function enableAll(buttons) {
    buttons.forEach(button => {
        button.disabled = false;
    });
}