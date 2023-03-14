// Take that seed and add it to the array of plants in the field module. 

//then get the plants array from the fields.js module.
import { addPlant } from "./field"

//const newPlants = []


// define and export a plantSeeds function.
// The function must accept the year's planting plan as input (i.e. it must define a parameter)
export const plantSeeds = (yearlyPlan) => {
    // iterate both the parent array and the child arrays
    for (const plan of yearlyPlan){
        // As you iterate the row of food types to be planted
        for (let seed of plan) {
            if (seed === "Asparagus") { // "" or ``
                //invoke the createAsparagus function to get an asparagus seed addPlant (asparagus)
                seed = createAsparagus()
                
            } 
            else if (seed === "Corn") {
                 seed = createCorn()  //createCorn is not defined
                
            }
            else if (seed === "Potato"){
                seed = createPotato()
            }    
            else if (seed === "SoyBean"){
                 seed = createSoybean()
               
            } 
            else if (seed === "Sunflower") {
                 seed = createSunflower()
                
            } 
            else if (seed === "Wheat") {
                 seed = createWheat()
                
            }
                addPlant(seed)
        }
    } return plantSeeds
}
// Checking Your Logic
// In the main.js module, invoke the function that plants all of the seeds, (useplant or addPlant from fields) 
//Then use console.log() to see if the plants array has been populated correctly.