// In each module define and export a function for creating a seed. Define the functions with the following syntax. If the plant is Asparagus, the function should be named createAsparagus. Same thing for all the others. Use arrow functions. Do not use the function keyword.
// Each of these functions should return an object with the following properties. Look at the table below the instructions to see what the values for each object are.
// type potato
// height 32
// output 2

export const createPotato = () => {
    const potato = {
        type: "Potato",
        height: 32,
        output: 2
    }
    
    return potato
}

console.log(createPotato())