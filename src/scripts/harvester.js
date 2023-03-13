

// The function will return an array of seed objects.
//const plan =["Corn", "Potato"]
// Iterate the array of growing plants. On each plant, get the value of the output property.  && use .output - for of loop
// Add that many of the plant objects to the array that the function returns. 

// the exception is corn. Half of your corn will be sold to cattle ranchers, only half of the output of each corn plant will be added to the array that this function returns. div by 2
// import define 
// import {usePlants } from "./field.js"
 import {plantSeeds} from "./tractor.js"

// In this module, define and export a harvestPlants function. The harvestPlants function must accept the plants array as input.
export const harvestPlants = () => {
    const harvestArray = []
    for (const plant of harvestArray){ 
        if (plant.type === "Corn") {
        harvestArray.push(plant.output / 2)
        } 
        else if (plant.type === "Asparagus" && plant.type === "Potato" && plant.type === "Soybean" && plant.type === "Sunflower" && plant.type === "Wheat" ) {
            harvestArray.push(plant.output)
            } 
    }
    return harvestArray
}


//harvestPlants(plants)