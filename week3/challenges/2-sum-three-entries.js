const list = [1721, 979, 366, 299, 675, 1456];
let result = null;

const seenNumbers = new Set(); 

for (let i = 0; i < list.length; i++) {
    const current = list[i]; 
    for (let j = i + 1; j < list.length; j++) {
        const complement = 2020 - current - list[j]; 

        if (seenNumbers.has(complement)) {
             console.log(`Наши числа это ${current}, ${list[j]} и ${complement}`);
            result = current * list[j] * complement; 
            break; 
        }
        seenNumbers.add(list[j]); 
    }
    if (result !== null) break; 
}

console.log(result); 


// TEST CODE, do not change
console.assert(result === 241861950, `The result is not correct, it is ${result}, but should be 241861950`);