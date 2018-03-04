


let ansU = 0;
let op = "+";
let level = 1;

function setLevel(value: any) {
  level = parseInt(value);
}
function showProblem() {
let Q:Question=getProblem(level,op)
let elP1 = document.getElementById("p1")!;
elP1.innerText=`${Q.n1} ${Q.op} ${Q.n2} = `
}

function check(event: KeyboardEvent) {
  if (event.keyCode == 13) {

    let elP1 = document.getElementById("p1")!;
    let elI1 = <HTMLInputElement>document.getElementById("i1")!;
    ansU = parseInt(elI1.value);
  }
  event.stopPropagation();
}
