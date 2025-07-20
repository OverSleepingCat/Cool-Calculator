const display = document.getElementById('display');

function append(char) {
  if (display.innerText === '0' && char !== '.') {
    display.innerText = char;
  } else {
    display.innerText += char;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  if (display.innerText.length === 1 || (display.innerText.length === 2 && display.innerText.startsWith('-'))) {
    display.innerText = '0';
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  try {
    let result = eval(display.innerText.replace('×', '*').replace('÷', '/'));
    display.innerText = result;
  } catch (e) {
    display.innerText = 'Error';
  }
}
