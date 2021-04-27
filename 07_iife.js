//()() Immediate Invoked Function Expression
const arr = []
for(var i = 0; i < 5; i++){
  (function(){
    var j = i
    arr.push(function(){
      console.log(j);
    })
  })(i)//замыкание переменной i
}

arr[1]()
arr[4]()