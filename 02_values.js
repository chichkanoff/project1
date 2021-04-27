/*
let a = 42
let b = a
b++
console.log('a', a);//42
console.log('b', b);//43
*/
let a = [1,2,3,4]
let b = a.concat() //вернет копию
b.push(5)
a.push(5)
console.log('a', a);
console.log('b', b);
console.log(a == b);//false