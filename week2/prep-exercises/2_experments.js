"use strict";

function runExperiment(sampleSizes) {
  const valueCounts = [0, 0, 0, 0, 0, 0];
  console.log(`Check what we have here ${sampleSizes}!`);   
  for (let i=1; i<=sampleSizes; i++) {  
    console.log(`Below is the test number ${i}:`); 
    const randomInteger = (Math.floor(Math.random() * 6) + 1) -1;
    console.log(`We get number ${randomInteger}`);
    valueCounts[randomInteger]= valueCounts[randomInteger] +1;
    console.log(`We had it ${valueCounts[randomInteger]} times`);
  }

const results = [];

   for (let j = 0; j < valueCounts.length; j++){
    let percentage = (valueCounts[j] / sampleSizes)*100;
results.push(percentage.toFixed(2));
    }

return results;
console.log(results);
}

function main() {
  const sampleSizes = [1, 10, 100]; 
  console.log(`Running experiments for: ${sampleSizes.join(", ")}`);

  for (const sampleSize of sampleSizes) {
    const results = runExperiment(sampleSize); 
    console.log(`Results: ${sampleSize}:`, results);
  }
}

main();