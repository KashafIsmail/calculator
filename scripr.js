let display = document.getElementById('display');
let currentInput = '';

// Add event listeners to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        let buttonText = this.textContent;

        if (buttonText === 'C') {
            // Clear the display
            clearDisplay();
        } else if (buttonText === '=') {
            // Calculate the result
            calculate();
        } else if (['+', '-', '*', '/'].includes(buttonText)) {
            // Append operator
            appendOperator(buttonText);
        } else {
            // Append number
            appendNumber(buttonText);
        }
    });
});

// Function to append numbers to the display
function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

// Function to append operators to the display
function appendOperator(operator) {
    if (currentInput === '' && operator === '-') {
        currentInput = '-';
        display.value = currentInput;
    } else if (currentInput !== '') {
        currentInput += operator;
        display.value = currentInput;
    }
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    display.value = '';
}

// Function to calculate the result and handle errors
function calculate() {
    try {
        // Use eval() to calculate the expression
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        // If there's an error (e.g., invalid input), display 'Error'
        display.value = 'Error';
        currentInput = '';  // Reset the input
    }
}
