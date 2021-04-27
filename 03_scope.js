function A(){
  let a = 1
  function B(){
    let b = 2
    function C(){
      let c = 3
      console.log(a,b,c)
    }
    C()
    console.log(a, b);
  }
  B()
  console.log(a);
}
A()