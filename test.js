class Add{
  constructor(...words){
    this.words = words
    this.print = function(){
      let w='$'
      for(let i=0; i<=words.length; i++){
        w+=words[i]+'$'
      }
      console.log(w)
    }
  }

}
var x = new Add('odin','dva','tri')
x.print()
/*function main(){
  var depth = parseInt(readLine(),10)
  var day = 0
  while(depth){
    day++
    depth -= 7
    if(depth<=0){
      return day
    }
    depth += 2
  }
}

function readLine(){
  var numb = prompt(numb)
  return numb
}
console.log(main())

function contact(name,number){
  this.name = name
  this.number = number;
  this.print = function(){
    console.log(this.name+": "+this.number)
  }
}

var a = new contact('Artur',45)
var b = new contact('Bob',24)

a.print()
b.print()*/