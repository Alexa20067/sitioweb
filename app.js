let displayValue = '';

function appendValue(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    if (displayValue.includes('/0')) {
      throw new Error("División por cero no permitida");
    }
    displayValue = eval(displayValue).toString();
    document.getElementById('display').value = displayValue;
  } catch (error) {
    document.getElementById('display').value = "Error";
  }
}
