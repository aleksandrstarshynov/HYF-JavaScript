let myString = 'hello,this,is,a,difficult,to,read,sentence';

let NewString = myString.replace(/,/g, " "); 

console.log(NewString); 

/* --- Code that will test your solution, do NOT change. Write above this line --- */
console.assert(NewString === 'hello this is a difficult to read sentence', 'There is something wrong with your solution');
