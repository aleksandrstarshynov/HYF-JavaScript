// There are 3 different types of drinks:
const drinkTypes = ['cola', 'lemonade', 'water'];


let drinkList =['cola', 'water', 'lemonade', 'cola', 'water', 'lemonade'];

let drinkTray = []; 
for (i=1; i<=5; i++) {
    let currentDrink = `${drinkList[i]}`;
        // console.log(currentDrink);
    
    drinkTray.push(currentDrink);
}
    // console.log(drinkTray);
    let answer = `Hey guys, I brought a ${drinkTray.join(', ')}!`;
    // let answer = `Hey guys, I brought a ${drinkTray}!`;
    console.log(answer);
