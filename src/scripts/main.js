console.log("Welcome to the main module")
// In the main.js, invoke the Catalog function and make sure you pass the array of food as an argument. 
 
import { catalog } from "./catalog.js"


// invoke  usePlant function from field?
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
// import { usePlant } from "./field.js";
import { harvestPlants } from "./harvester.js";

//import createPlan funtion and invoke here 
//import { createPlan } from "./plan.js"
//store value in a variable named yearlyPlan 
// invoke plantSeeds here
//  you need to  then use console.log() to output the value of yearlyPlan
const yearlyPlan = createPlan()
console.log(yearlyPlan)

// invoke plantSeeds here
const plantedSeeds = plantSeeds(yearlyPlan)
console.log(plantedSeeds)
// returns as a value of a variable, 

//catalog (harvestPlants())
const harvestedPlants = harvestPlants(plantedSeeds)
console.log(harvestedPlants)



import { createSoybean } from "./seeds/soybean.js";
console.log(createSoybean())

import { createWheat } from "./seeds/wheat.js";
console.log(createWheat())

import { createSunflower } from "./seeds/sunflower.js";
console.log(createSunflower())

import { createAsparagus } from "./seeds/asparagus.js";
console.log(createAsparagus())

import { createPotato } from "./seeds/potato.js";
console.log(createPotato())

import { createCorn } from "./seeds/corn.js";
console.log(createCorn())


