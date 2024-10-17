let currentNumber = ''
let previousNumber = ''
let operation = ''
let currOp = ''

function appendNumber(number) {
    currentNumber += number
    whichNum()
}

function whichNum() {
    if(previousNumber != '') {
        document.getElementById('display').value = `${previousNumber} ${currOp} ${currentNumber}`;
    } else {
        document.getElementById('display').value = `${currentNumber} ${currOp} ${previousNumber}`;
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentNumber;
}

function setOperation(op) {
    document.getElementById('display').value = `${currentNumber} ${op}`;

    if (currentNumber === '') {
        return
    }
    if (previousNumber !== '') {
        calculate()
    }
    operation = op
    currOp = op
    previousNumber = currentNumber
    currentNumber = ''
}

function calculate() {
    if (currentNumber === '' || previousNumber === '') {
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
    document.getElementById('display').value = `${previousNumber} ${currOp} ${currentNumber} = ${result}`
    currentNumber = result
    operation = ''
    previousNumber = ''
}
function clearDisplay() {
    previousNumber = ''
    currentNumber = ''
    operation = ''
    currOp = ''
    updateDisplay()
}
function deleteNumber() {
    currentNumber = currentNumber.slice(0, -1)
    updateDisplay()
}
