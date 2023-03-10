

// As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
// Take that seed and add it to the array of plants in the field module. const newPlants = []

// Checking Your Logic
// In the main.js module, invoke the function that plants all of the seeds, and then get the plants array from the fields.js module. Then use console.log() to see if the plants array has been populated correctly.

import { createAsparagus } from "./seeds/asparagus"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"


// In this module, define and export a plantSeeds function.
// The function must accept the year's planting plan as input (i.e. it must define a parameter).
export const plantSeeds = (yearlyPlan) => {
    for (const  ){
        createAsparagus()
    } if
    {
        createCorn()
    }else if
    {
        createPotato()
    }
    {
        createSoybean()
    }
    {
        createSunflower()
    }
    {
        createWheat()
    }

    
    
    
    
}

// The plan is an array.It contains 3 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays.
// // Example growing plan. Actual plan is bigger.
// [
//     ["Potato", "Soybean", "Soybean", "Corn"],
//     ["Wheat", "Corn", "Wheat", "Asparagus"],
//     ["Asparagus", "Wheat", "Soybean", "Corn"]
// ]
const plan = []

