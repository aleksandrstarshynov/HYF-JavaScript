/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/
"use strict";

const trafficLight = {
  state: "green",
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;
  console.log("The traffic light is on", currentState);

  if (currentState === "green") {
    trafficLight.state = "orange";
  } else if (currentState === "orange") {
    trafficLight.state = "red";
  } else if (currentState === "red") {
    trafficLight.state = "green";
    rotations++; 
  }
}

/**
We can simplify the code by using trafficLight.state directly

"use strict";

const trafficLight = {
  state: "green",
};

let rotations = 0;

while (rotations < 2) {
  console.log("The traffic light is on", trafficLight.state);

  if (trafficLight.state === "green") {
    trafficLight.state = "orange";
  } else if (trafficLight.state === "orange") {
    trafficLight.state = "red";
  } else {
    trafficLight.state = "green";
    rotations++; // Increment when a full cycle is completed
  }
}

*/
