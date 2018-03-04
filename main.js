"use strict";
let ansU = 0;
let op = "+";
let level = 1;
function setLevel(value) {
    level = parseInt(value);
}
function showProblem() {
    let Q = getProblem(level, op);
    let elP1 = document.getElementById("p1");
    elP1.innerText = `${Q.n1} ${Q.op} ${Q.n2} = `;
}
function check(event) {
    if (event.keyCode == 13) {
        let elP1 = document.getElementById("p1");
        let elI1 = document.getElementById("i1");
        ansU = parseInt(elI1.value);
    }
    event.stopPropagation();
}
