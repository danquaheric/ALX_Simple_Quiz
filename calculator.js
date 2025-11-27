// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Basic divide; no special handling unless you want it
    return number2 === 0 ? "Error (div by 0)" : number1 / number2;
}

// Helper to get numbers safely from inputs
function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Helper to display result
function displayResult(value) {
    document.getElementById('calculation-result').textContent = value;
}

// Event listeners
document.getElementById('add').addEventListener('click', function () {
    const { number1, number2 } = getNumbers();
    const result = add(number1, number2);
    displayResult(result);
});

document.getElementById('subtract').addEventListener('click', function () {
    const { number1, number2 } = getNumbers();
    const result = subtract(number1, number2);
    displayResult(result);
});

document.getElementById('multiply').addEventListener('click', function () {
    const { number1, number2 } = getNumbers();
    const result = multiply(number1, number2);
    displayResult(result);
});

document.getElementById('divide').addEventListener('click', function () {
    const { number1, number2 } = getNumbers();
    const result = divide(number1, number2);
    displayResult(result);
});
