
// Be aware that when planting corn, an array of objects will be provided instead of a single object like all the other type of seeds. Investigate the Array.isArray method to check if corn got passed in, or one of the others.

import { createAsparagus } from "./seeds/asparagus"
import { createCorn } from "./seeds/corn"
import { createPotato } from "./seeds/potato"
import { createSoybean } from "./seeds/soybean"
import { createSunflower } from "./seeds/sunflower"
import { createWheat } from "./seeds/wheat"


// Checking Your Logic
// Write some temporary test code in the main module to check if your functions do their job correctly.

// Create a seed object.
// Invoke addPlant() and specify the seed object as the argument.
//addPlant(asparagus)
// Invoke usePlants() and store its return value in a variable.
//const plants = usePlants()
// Use console.log() to make sure your seed object got added to the array of plants in the field.

// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. Do not export the array.
let plantsArray = []

// In the module, define and export a function named addPlant. The addPlant function must accept a seed object as input. The function will add the seed to the field (How do you add something to an array? Do you remember the method for it?).
export const addPlant = () => {
    //.push into array each seed object type here?
    plantsArray.push(createAsparagus)
    createAsparagus
    createCorn
    createSoybean
    createSunflower
    createWheat
    createPotato
// plantsArray.isArray()
return addPlant
}

// Define and export a function named usePlants that returns a copy of the array of plants.
export const usePlants = () => {
   

return usePlants
}