/**
 * Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
 *   
 *   Declare a variable that holds an empty object literal (your meal recipe).
 *   Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
 *   Log each property out separately, using a loop (for, while or do/while)
 *   
 * Expected result:
 *   
 *   Meal name: Omelette
 *   Serves: 2
 *   Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
 */


// First version, I have different output type, but correct loop

// let mealRecipe = {};
// mealRecipe.title = "Omelette";
// mealRecipe.Serves = 2;
// mealRecipe.Ingredients = ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"];

// let keys = Object.keys(mealRecipe); 
// let i=0; 

// while (i < keys.length) {
//     let currentKey = keys[i];
//     let currentValue = mealRecipe[currentKey];
//     console.log(currentKey + ":" + currentValue);
//     i++;
// }

let mealRecipe = {};
mealRecipe.title = "Omelette";
mealRecipe.Serves = 2;
mealRecipe.Ingredients = ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"];

let keys = Object.keys(mealRecipe); 
let i = 0;

while (i < keys.length) {
    let currentKey = keys[i];
    let currentValue = mealRecipe[currentKey];
    
    if (currentKey === 'title') {
        console.log("Meal name: " + currentValue);
    } else if (currentKey === 'Serves') {
        console.log("Serves: " + currentValue);
    } else if (currentKey === 'Ingredients') {
        console.log("Ingredients: " + currentValue.join(', ')); 
    }
    i++;
}

// SECOND VERSION
// let receipt = {}; 
// receipt.Title = "Omelette"; 
// receipt.Serves = 2; 
// receipt.Ingredients = ['4 eggs', '2 strips of bacon', '1 tsp salt/pepper']; 
// 
// for (let option in receipt) {
// if (option == 'Title') {console.log(`Meal name: ${receipt[option]}`);}
// else if (option == 'Serves') {console.log(`Serves: ${receipt[option]}`);}
// else {const ingredients = receipt[option];
//     console.log(`Ingedients: ${ingredients.join(', ')}`);
//     }
// }