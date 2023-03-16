// In each module define and export a function for creating a seed.
// Define the functions ex createAsparagus. Use arrow functions.

export const createCorn = () => {
  // Each of these functions should return an object with the following properties. Look at the table below the instructions to see what the values for each object are.
  const corn = [
    { type: "Corn", height: 180, output: 6 },
    { type: "Corn", height: 180, output: 6 },
  ];
  // The createCorn function should return an array with two identical objects in it. Each with the proper keys and values.
  return corn;
};

// correct type and number of seeds sown - recevied has value undefined.
