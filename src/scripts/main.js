console.log("Welcome to the main module")
// In the main.js module, invoke the Catalog function and make sure you pass the array of food as an argument. Make sure your web server is running and refresh the browser. 
import { catalog } from "./catalog.js"
import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"


//import createPlan funtion and invoke here and store value in a variable named yearlyPlan Remember that to assign what a function returns as a value of a variable, the syntax is...
// In the plan.js module, there is a createPlan() function that is exported. In the main.js module, import that function and invoke it. Since that function returns a value, you need to store that value in a variable named yearlyPlan. then use console.log() to output the value of yearlyPlan to the developer console in Chrome
const yearlyPlan = createPlan()


// invoke plantSeed here
import { plantSeeds } from "./tractor.js"
plantSeeds()

// const appropriatelyNamedVariable = theFunctionThatReturnsAValue()
const asparagusSeed = createAsparagus()
//console.log(asparagusSeed)

const cornSeed = createCorn()
//console.log(cornSeed)

const potatoSeed = createPotato()
//console.log(potatoSeed)

const soybeanSeed = createSoybean()
//console.log(soybeanSeed)

const sunflowerSeed = createSunflower()
//console.log(sunflowerSeed)

const wheatSeed = createWheat()
//console.log(wheatSeed)

// invoke  newPlants function from field?
// invoking catalog function from catalog.js
catalog()




// Then use console.log() to output the value of yearlyPlan to the developer console in Chrome.
console.log(yearlyPlan)




