const display = document.getElementById('display');

function appendToDisplay(char) {
    display.value += char;
}

function deleteCharacter() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1); // Removes the last character
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch(err) {
        display.value = "Error";
    }
    
}

function clearDisplay() {
    display.value = 'cleared';
    setTimeout(() => {
        display.value = '';
      }, 500);
}
