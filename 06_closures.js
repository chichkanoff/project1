function foo(name){
  
  return function(){
    console.log("Hello, "+name)
  }
}
const boo = foo('Ivan')
boo();
foo("Ivan")();

//Example
function fee(){
  const fr = ['React', 'Angular']
  return obj = {
    print: function(){
      console.log(fr.join(' '));
    },
    add: function(el){
      fr.push(el)
    }
  }
}
const manager = fee()
manager.add('Electron')
manager.print();

//setTimeout
const fib = [1,1,2,3,5,8,13]

for(let i = 0; i < fib.length; i++){
    setTimeout(console.log(fib[i]), 1500)
}
//()() IIFE
for (var i = 0; i < fib.length; i++) {
  (function (j) {
    setTimeout(console.log(fib[j]), 1500);
  })(i);
}