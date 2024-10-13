let currentNumber = '';
let previousNumber = '';
let operation = '';

function appendNumber(number) {
    currentNumber += number
    updateDisplay()
}

function updateDisplay() {
    document.getElementById('display').value = currentNumber;
}

function setOperation(op) {
    if (currentNumber === '') {
        return
    }
    if (previousNumber !== '') {
        calculate()
    }
    operation = op
    previousNumber = currentNumber
    currentNumber = ''
}

function calculate() {
    if (currentNumber == '' || previousNumber === '') {
        return
    }
    let result
    const prev = parseFloat(previousNumber)
    const curr = parseFloat(currentNumber)
    switch (operation) {
        case ('+'):
            result = prev + curr
            break
        case ('-'):
            result = prev - curr
            break
        case ('/'):
            result = prev / curr
            break
        case ('*'):
            result = prev * curr
            break
        default:
            return
    }
    currentNumber = result
    operation = ''
    previousNumber = ''
    updateDisplay()
}
function clearDisplay() {
    previousNumber = ''
    currentNumber = ''
    operation = ''
    updateDisplay()
}
function deleteNumber() {
    currentNumber = currentNumber.slice(0, -1)
    updateDisplay()
}
