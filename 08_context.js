const person = {
  surename: 'Stark',
  knows: function(what, name){
    console.log(`What is you know ${name} ${this.surename}?`)
    console.log(`You knows ${what}.`)
  }
}
person.knows('all', 'Jon')

const user = {
  surename: 'Worker'
}

//Calls a method of an object, substituting another object for the current object.
person.knows.call(user,'nothing', 'Stiv')
person.knows.call(user, ...["nothing", "Stiv"])
//Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
person.knows.apply(user, ["nothing", "Stiv0"])
//For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.
person.knows.bind(user, "nothing", "Stiv1")()

function Person(name, age){
  this.name = name
  this.age = age
  console.log(this);
}

const elen = new Person('Elen', 25)

//============
function logThis(){
  console.log(this);
}

const obj = {
  name: 'Ivan'
}
//Явная передача контекста
logThis.call(obj)
logThis.apply(obj)
logThis.bind(obj)()

//===============
const animal = {
  legs: 4,
  logThis: function(){
    console.log(this);
  }
}
//Неяная передача контекста того объекта, из которого вызван
animal.logThis()

//Стрелочная функция не создает свой собственный контекст
function Cat(color) {
  this.color = color
  console.log(this)
  ;(()=>console.log(this))()
}

new Cat('Red')