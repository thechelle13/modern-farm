
//const plan =["Corn", "Potato"]



const harvestedPlants = []

// In this module, define and export a harvestPlants function. 
//harvestPlants function must accept the plants array as input.
export const harvestPlants = (plantsArray) => {
    
// Iterate the array of growing plants. 
    for (const plant of plantsArray){ 
        for (let i=0; i < plant.output; i++) {
            harvestedPlants.push(plant)
        }
        // On each plant, get the value of the output property.
    }
    return harvestedPlants

    // The function will return an array of seed objects.
    //return usePlants()
}


