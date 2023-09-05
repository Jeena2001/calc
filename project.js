let inputBox = document.getElementById('inputbox');

function appendToInput(value) {
    inputBox.value += value;
}

function clearInput() {
    inputBox.value = '';
}

function deleteLastChar() {
    inputBox.value = inputBox.value.slice(0, -1);
}

function calculateResult() {
    try {
        inputBox.value = eval(inputBox.value);
    } catch (error) {
        inputBox.value = 'Error';
    }
}