let a = "Java"
let b = "C++"
{
  a = "C"
  let b = "JS"
  console.log(b);//JS
}
console.log(a);//C
console.log(b);//C++

const array = ['Javascript','is','awesome']
array.push('!')
console.log(array);

const obj = {}
obj.age = 25
obj.name = 'Ivan'
console.log(obj)
delete obj.name
console.log(obj);
//obj = {}//Assignment to constant variable.
