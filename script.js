let display = document.getElementById("display");

function appendToDisplay(value) {
    let lastChar = display.value.slice(-1);

    // Check if the last character is a mathematical sign
    if (isMathSign(lastChar) && isMathSign(value)) {
        // If the last and current characters are both mathematical signs, replace the last one
        display.value = display.value.slice(0, -1) + value;
    } else {
        // Otherwise, append the value as usual
        display.value += value;
    }
}

function isMathSign(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
