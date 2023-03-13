// Take that seed and add it to the array of plants in the field module. const newPlants = []

// Checking Your Logic
// In the main.js module, invoke the function that plants all of the seeds, and then get the plants array from the fields.js module. Then use console.log() to see if the plants array has been populated correctly.


// In this module, define and export a plantSeeds function.
// The function must accept the year's planting plan as input (i.e. it must define a parameter).
// As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
export const plantSeeds = (yearlyPlan) => {
    // iterate both the parent array and the child arrays
    for (const plan of yearlyPlan){
        for (let seed of plan) {
            if (seed ==="Asparagus") {
                let asparagus = createAsparagus()
                addPlant(asparagus)
            } 
            else if (seed === "Corn") {
                let corn = createCorn()
                addPlant(corn)
            } 
            else if (seed === "Potato"){
                let potato = createPotato()
                addPlant(potato)
            } 
            else if (seed === "SoyBean"){
                let soybean =createSoybean()
                addPlant(soybean)
            } 
            else if (seed === "Sunflower") {
                let sunflower = createSunflower()
                addPlant(sunflower)
            } 
            else if (seed === "Wheat") {
                let wheat = createWheat()
                addPlant(wheat)
        }
        }
    }
}
  

    

