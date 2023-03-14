
//const plan =["Corn", "Potato"]

// import {usePlants } from "./field.js"
 //import {plantSeeds} from "./tractor.js"

// In this module, define and export a harvestPlants function. 
//harvestPlants function must accept the plants array as input.
export const harvestPlants = (plantsArray) => {
    let harvestedPlants = []
// Iterate the array of growing plants. On each plant, get the value of the output property.
    for (let plant of plantsArray){ 
        if (plant.type === "Corn") {
            // the exception is corn. Half of your corn will be sold to cattle ranchers, only half of the output of each corn plant will be added to the array that this function returns. div by 2 * .5?
            let halfCorn = plant.output * 0.5
            // Add that many of the plant objects to the array that the function returns. .push
        harvestedPlants.push(plant.output)
        } 
        else if (plant.type ) {
            harvestedPlants.push(plant.output)
            } 
    }
    // The function will return an array of seed objects.
    return harvestedArray
}


// plantsArray is not iterable ( const plant of plantsArray)
// "harvested correct total number of plants" and harvested correct number of asparagus plants.
// can not read properties of undefined (reading .length) harvestedPlants.length