const list = [1721, 979, 366, 299, 675, 1456];
let result = null;

for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
        if (list[i] + list[j] === 2020) {
            console.log(`These numbers are ${list[i] } и ${list[j]}`);
            result = list[i] * list[j];
            break; 
        }
    }
    if (result !== null) break; 
}

console.log(`The result of their multiplication = `, result);

// TEST CODE, do not change
console.assert(result === 514579, `The result is not correct, it is ${result}, but should be 514579`);



// The second option, with optimized code
// const list = [1721, 979, 366, 299, 675, 1456];
// let result = null;

// const seenNumbers = new Set(); 
// for (let num of list) {
//     const complement = 2020 - num; 
//     if (seenNumbers.has(complement)) {
//         result = num * complement; 
//         break;
//     }
//     seenNumbers.add(num); 
// }
// console.log(result); 