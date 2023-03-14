// In each module define export a function for creating a seed
// Define the functions with the following syntax. If the plant is Asparagus, the function should be named createAsparagus. Same thing for all the others. Use arrow functions. Do not use the function keyword.

const asparagus = {
    type: "Asparagus",
    height: 24, 
    output: 4
    }
export const createAsparagus = () => {
    
    
    return asparagus

}

// Each of these functions should return an object with the following properties. above
// type asparagus
// height 24
// output 4

