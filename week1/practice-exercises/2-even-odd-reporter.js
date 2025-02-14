for ( let i = 0; i < 20; i++) {
    if ( i % 2 === 0 ) {
        console.log(`The number ${i} is odd!`);
    } else {
        console.log(`The number ${i} is even!`);
    }
}



// SECOND VERSION - USING FUCTION
// for (i=1; i<=20; i++) {
//     function isEven(i) {
//         return i % 2 === 0;}
//     if (isEven(i)) {
//         let result = `${i} is even!`;
//         console.log(result);
//     } else {
//         let result = `${i} is odd!`;
//         console.log(result);}
//     }