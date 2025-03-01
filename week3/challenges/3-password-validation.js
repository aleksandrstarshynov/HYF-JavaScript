const passwordList = [
    { times: '1-3', letter: 'a', password: 'abcde' },
    { times: '1-3', letter: 'b', password: 'cdefg' },
    { times: '2-9', letter: 'c', password: 'ccccccccc' }
];

let count = 0;

for (let i = 0; i < passwordList.length; i++) {
    let x = passwordList[i].password;  
    let { times, letter, password } = passwordList[i];  
    let [min, max] = times.split('-').map(Number);  

    count = 0;  
    for (let j = 0; j < password.length; j++) {
        if (password[j] === letter) {
            count++;
        }
    }

    if (count >= min && count <= max) {
        console.log("Пароль подходит");
    } else {
        console.log("Пароль не подходит");
    }
}


//                                                      The second option;
// let count = 0;

// for (let i = 0; i < passwordList.length; i++) {
//     let { times, letter, password } = passwordList[i];  
//     let [min, max] = times.split('-').map(Number);  

//     count = password.split(letter).length - 1;

//     if (count >= min && count <= max) {
//         console.log("The password is correct");
//     } else {
//         console.log("The password does not match");
//     }
// }