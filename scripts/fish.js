// Import the function that returns a copy of the fish array

import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}




export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes1 = newFishOrder()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes1) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish-card">
            <div><img  class="fish-img" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}


const newFishOrder = () => {
    let newOrder = []
    // 3, 6, 9, 12, etc... fish
    for (const fish of allFish) {
        if (fish.length % 3 === 0){
            newOrder.push(fish)
        }
    }
    // 5, 10, 15, 20, 25, etc... fish
    for (const fish of allFish) {
        if (fish.length % 5 === 0 && !newOrder.includes(fish)){
        newOrder.push(fish)
        } 
    }
    // other fish
    for (const fish of allFish) {
        if ((fish.length % 5 != 0 && fish.length % 3 != 0)){
            newOrder.push(fish)
        }
    }
    return newOrder
}


/*
export const fishyy = []
fishyy.push(mostHolyFish(), soldierFish(), nonHolyFish())
*/


console.log(newFishOrder())