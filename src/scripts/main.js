console.log("Welcome to the main module")

//import createPlan funtion and invoke here and store value in a variable named yearlyPlan Remember that to assign what a function returns as a value of a variable, the syntax is...

// const appropriatelyNamedVariable = theFunctionThatReturnsAValue()
// Then use console.log() to output the value of yearlyPlan to the developer console in Chrome.

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)