// Take that seed and add it to the array of plants in the field module. 
//import { createPlan } from "./plan.js";

import { addPlant, usePlant } from "./field.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createWheat } from "./seeds/wheat.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createSoybean } from "./seeds/soybean.js";
import { createAsparagus } from "./seeds/asparagus.js";
//import { harvestPlants } from "./harvester.js";
//then get the plants array from the fields.js module.
//const newPlants = []
// define and export a plantSeeds function.
// The function must accept the year's planting plan as input (i.e. it must define a parameter)
export const plantSeeds = (yearlyPlan) => {
    // iterate both the parent array and the child arrays
    for (const plan of yearlyPlan){
        // As you iterate the row of food types to be planted - invokechild
        for (const seed of plan) {
            if (seed === "Asparagus") { // "" or ``
                //invoke the createAsparagus function to get an asparagus seed addPlant (asparagus)
                addPlant(createAsparagus())
                
            } 
            else if (seed === "Corn") {
                 addPlant( createCorn())  
                
            }
            else if (seed === "Potato"){
                addPlant(createPotato())
            }    
            else if (seed === "Soybean"){
                addPlant(createSoybean())
               
            } 
            else if (seed === "Sunflower") {
                addPlant( createSunflower())
                
            } 
            else if (seed === "Wheat") {
                 addPlant(createWheat())
                
            }            
        }
    } 
    return usePlant()
}
// Checking Your Logic
// In the main.js module, invoke the function that plants all of the seeds, (useplant or addPlant from fields) 
//Then use console.log() to see if the plants array has been populated correctly.