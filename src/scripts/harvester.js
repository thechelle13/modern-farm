
//const plan =["Corn", "Potato"]



const harvestedPlants = []

// In this module, define and export a harvestPlants function. 
//harvestPlants function must accept the plants array as input.
export const harvestPlants = (plantsArray) => {
    
// Iterate the array of growing plants. 
    for (const plant of plantsArray) { 
        
      if ( plant.type === "Corn") {
        for (let i = plant.output *.5; i > 0; i--) {
            harvestedPlants.push(plant)
        }
    }
     else { 
            for (let i=0; i < plant.output; i++) {
                harvestedPlants.push(plant)
            }
        }
    }
    return harvestedPlants
    
        // On each plant, get the value of the output property.
    }
    
    
    // The function will return an array of seed objects.






