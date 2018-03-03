let L1 = [0, 1, 2, 3, 4, 5, 10];
let L2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n1 = 0;
let n2 = 0;
let ans = 0;
let op = "+";
let Level = "L1";

function showName() {
  let el = document.getElementById("p1")!;
  el.innerHTML = "hello";
}

function getNumbers(L: number[]) {
  let n1: number = Math.floor(Math.random() * L.length);
  let n2: number = Math.floor(Math.random() * L.length);
}

function showProblem() {
  if (Level == "L1") {
    getNumbers(L1);
  } else {
    getNumbers(L2);
  }
  let el = document.getElementById("p1")!;
  el.innerHTML = n1 + " " + op + " " + n2 + " = ";
}

function check(event:KeyboardEvent){
    if(event.keyCode==13){
     if
    }
    event.stopPropagation();
}
