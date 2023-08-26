//CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

ReactDOM.render(
  <table>
    <tbody>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Colour</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </tbody>
  </table>,
  document.getElementById("root")
);

// import animals, { useAnimals } from "./data";

// const [cat, dog] = animals;
// when destructuring an Array, the array element name must not match the original array name

// const { name, sound } = cat;
// when destructuring an object the object name must match the original object name ie sound = sound, name=name

// if you wanted to rename the array object, you can do that by using a colon the the new name
// ie const { name: catName, sound: catSound } = cat;

// to set a custom value in case the part in an array is empty, use an equal sign and set what you want when a value isnt there
// ie const { name = "catName", sound = "catSound" } = cat;
// this will help give a default value to display incase of an unfilled field
// console.log(dog);

// const {feedingRequirement: { food, water }} = cat;
// to target objects nested in an array element, you can get them like so
// you can destructure just the object you want, you dont need to destructure the entire array
// console.log(water);

// const [ animal, makeSound ] = useAnimals(cat);
// console.log(animal);
// makeSound();
// you can create a function to hold the value of the animal and better deconstruct it further
