
function setAnswer(problem:Question) {
    if(problem.op=="+"){problem.answer=problem.n1+problem.n2}
  }
function getNumbers(problem:Question){
let L1Add=[0,1,2,3,4,5,10]
let L2Add=[0,1,2,3,4,5,6,7,8,9,10]
if(problem.level==1 && problem.op=='+'){
    problem.n1=L1Add[Math.floor(Math.random()*L1Add.length)]
    problem.n2=L1Add[Math.floor(Math.random()*L1Add.length)]
    problem.answer=problem.n1+problem.n2
}

}
 function getProblem(level: number,op:string) {
    let problem=<Question>{};
    problem.op=op;
    problem.level=level;
    getNumbers(problem)
    return problem
  }