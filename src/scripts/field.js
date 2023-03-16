
// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. Do not export the array.
const plantsArray = [];

// In the module, define and export a function named addPlant.
// The addPlant function must accept a seed object as input. 
// use if else to seperate different corn 
// use Array.isArray ref from notes-
// .push into the array to store
// seedObject = {type: 'Soybean', height: 20, output: 4}
// if seedOject is an array then iterate and push to plantsArry
// else push object to plantsArray directly
export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (let plant of seedObject) {
            plantsArray.push(plant)
        }
    }
        else ( plantsArray.push(seedObject))
      
  // Be aware that when planting corn, an array of objects will be provided instead of a single object like all the other type of seeds. 
    
  return plantsArray;
};

// Define and export a function named usePlants
export const usePlant = () => {
    
// returns a copy of the array of plants - 
return plantsArray
};