let num1 = "";
let num2 = "";
let order = 0;
let operator;
const display = document.getElementById("text");
const buttons = document.querySelectorAll('button');
window.onload = function() {
  document.getElementById("compute").style.display = 'none';
  document.getElementById("clear").style.display = 'none';
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.innerHTML) {
      case "+":
      case "-":
      case "/":
      case "*":
      case "^":
        operators(button.innerHTML);
        break;
      case "Compute":
        compute();
        break;
      case "Clear":
        clear();
        break;
      default:
        addtheNumber(button.innerHTML);
    }
  })
});


function addtheNumber(num) {
  if (order == 0) {
    num1 += num;
    display.value = num1;
    console.log(num1);
    return;
  }
  num2 += num;
  display.value = num2;
  console.log(num2);
}
function operators(op) {
  order = 1;
  operator = op;
  console.log(order);
  display.value = "";
  hideTheOps();
  document.getElementById("compute").style.display = 'inline';
}
function hideTheOps() {
  document.getElementById("add").style.visibility = 'hidden';
  document.getElementById("sub").style.visibility = 'hidden';
  document.getElementById("multi").style.visibility = 'hidden';
  document.getElementById("divide").style.visibility = 'hidden';
  document.getElementById("power").style.visibility = 'hidden';
}
function showTheOps() {
  document.getElementById("add").style.visibility = 'visible';
  document.getElementById("sub").style.visibility = 'visible';
  document.getElementById("multi").style.visibility = 'visible';
  document.getElementById("divide").style.visibility = 'visible';
  document.getElementById("power").style.visibility = 'visible';
}
function compute() {
  switch (operator) {
    case "+":
      display.value = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      display.value = parseFloat(num1) - parseInt(num2);
      break;
    case "/":
      display.value = parseFloat(num1) / parseFloat(num2);
      break;
    case "*":
      display.value = parseFloat(num1) * parseFloat(num2);
      break;
    case "^":
      display.value = Math.pow(parseFloat(num1), parseFloat(num2));
      break;
  }
  showTheOps();
  num1 = "";
  num2 = "";
  order = 0;
  document.getElementById("compute").style.display = 'none';
  buttons.forEach(button => {
    button.style.display = 'none';
  })
  document.getElementById("clear").style.display = 'inline';
}
function clear() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.style.display = 'inline';
  });
  document.getElementById("clear").style.display = 'none';
  document.getElementById("compute").style.display = 'none';
  display.value = "";
}


function one() {
  addtheNumber("1");
}
function two() {
  addtheNumber("2");
}
function three() {
  addtheNumber("3");
}
function four() {
  addtheNumber("4");
}
function five() {
  addtheNumber("5");
}
function six() {
  addtheNumber("6");
}
function seven() {
  addtheNumber("7");
}
function eight() {
  addtheNumber("8");
}
function nine() {
  addtheNumber("9");
}
function add() {
  operators("+");
}
function sub() {
  operators("-");
}
function multi() {
  operators("*");
}
function divide() {
  operators("/");
}