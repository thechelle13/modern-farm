console.log("Welcome to the main module")
// In the main.js, invoke the Catalog function and make sure you pass the array of food as an argument. 
 
import { catalog } from "./catalog.js"
catalog (harvestPlants())

// invoke  usePlant function from field?
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { usePlants } from "./field.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createWheat } from "./seeds/wheat.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createSoybean } from "./seeds/soybean.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { harvestPlants } from "./harvester.js";

//import createPlan funtion and invoke here 
//import { createPlan } from "./plan.js"
//store value in a variable named yearlyPlan 
// invoke plantSeeds here
const yearlyPlan = () => {
return plantSeeds(yearlyPlan)
}
// returns as a value of a variable, 

//  you need to  then use console.log() to output the value of yearlyPlan 

createAsparagus()
//console.log(asparagusSeed)
const corn = createCorn()

const potato = createPotato()
//console.log(potatoSeed)

const soybean = createSoybean()
//console.log(soybeanSeed)

const sunflower = createSunflower()
//console.log(sunflowerSeed)

const wheat = createWheat()
//console.log(wheatSeed)



