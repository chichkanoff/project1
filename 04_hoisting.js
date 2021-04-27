console.log(a)//undefined
//console.log(b);//Cannot access 'b' before initialization
//console.log(c);//Cannot access 'b' before initialization
var a = 22
let b = 15
const c = 1

console.log(foo(a,b))//37
//Function Declaration
function foo(a,b){
  return a+b
}
//console.log(boo(a, b));//Cannot access 'boo' before initialization
//Function Expression
let boo = function(a,b){
  return a+b
}
console.log(boo(a,b));//37