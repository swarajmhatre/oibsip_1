// Clearing display screen
function clear() {
  document.getElementById("result").value = "";
}
// Appending next character
function append(char) {
  document.getElementById("result").value += char;
}
// Calculation
function calculate() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}
// Deleting last character
function del() {
  let x = document.getElementById("result").value;
  y = x.slice(0, -1);
  document.getElementById("result").value = y;
}
