//null, undefined, number, string, boolean, object, symbol
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof 100);
console.log(typeof 'string');
console.log(typeof {});
console.log(typeof function(){});
console.log(typeof true);
console.log(typeof false);
console.log(typeof Array);
console.log(typeof Math);
console.log(typeof Date);
//null, undefined, NaN, '', 0, false
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(false));
//+
console.log(''+5+1);//51
console.log(''-5-1);//-6
console.log('4'*'5');//20
console.log('42px'-2);//NaN
console.log(undefined+5);//NaN
console.log(undefined+'5');//undefined5
console.log(null+5);//0+5
console.log(null+'5');//null5
console.log(NaN+'3');//NaN3
//==, ===
console.log(null==undefined);//true
console.log(null===undefined);//false
console.log(null==0);//false
console.log(null=='');//false
console.log(null==false);//false
console.log(''==false);//true
console.log('0'==0);//true
console.log('0'==false);//true

console.log(false==[]);//true
console.log(0==[]);//true
console.log(''==[]);//true
console.log('0'==['0']);//true
console.log(0=={});//false