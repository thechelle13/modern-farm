// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. Do not export the array.
const plantsArray = [];

// In the module, define and export a function named addPlant.
//  The addPlant function must accept a seed object as input.
export const addPlant = (seedObject) => {
    plantsArray.push(seedObject)
    //if () {

    
  //The function will add the seed to the field (How do you add something to an array? Do you remember the method for it?).
  ;

  // Be aware that when planting corn, an array of objects will be provided instead of a single object like all the other type of seeds. Investigate the Array.isArray method to check if corn got passed in, or one of the others. if else
  //.push into array
  //for (const seed of seeds){
  return plantsArray;
};

// Define and export a function named usePlants
export const usePlant = () => {
    const newPlantsArray = addPlant()

// returns a copy of the array of plants
return newPlantsArray
};




//seedObject = {type: 'Soybean', height: 20, output: 4}
// if seedOject is an array then iterate and push to plantsArry
// else push object to plantsArray directly