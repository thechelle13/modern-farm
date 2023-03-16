
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { usePlant } from "./field.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createWheat } from "./seeds/wheat.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createSoybean } from "./seeds/soybean.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { harvestPlants } from "./harvester.js";
// The Catalog function should iterate the array of food objects.
// As you iterate the array, the <main> element should have its inner HTML appended with an HTML representation of a food item. Use the following example for each food item. The example has Corn hard-coded. Yours should not. It should output the name property of the current food object.
// <section class="plant">Corn</section>

//import { addPlant } from "./field"


// . container is class for main in index.html

//import (usePlant)


// Define and export a Catalog function.
// The Catalog function should accept the harvested food array as input.
export const catalog = (harvestedFood) => {
    let htmlString = `<main class ="container">`
    for (let harvest of harvestedFood) {
        //reference - beyonce exe to build html string
        htmlString += `<section class="plant">${usePlant}</section>`
        htmlString += `</main>`
    }
    return htmlString
}
    //for (const  )
 //  set equal to? = `<section class="plant">Corn</section>`
