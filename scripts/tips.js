import { getTips } from "./database.js";

const allTips = getTips()

export const TipsList = () => {
    const tips = allTips

    let htmlString2 = `<article class="tipsList">`

    for (const tip of tips) {

        htmlString2 += `<section class="tips-card"
        <div class="tip_name">${tip.name}</div>
        <div class="tip_tankTemp">${tip.tankTemp}</div>
        <div class="tip_sanitize">${tip.sanitize}</div>
        <div class="tip_salinity">${tip.salinity}</div>
        </section>
` 
    }
    htmlString2 += `</article>`

    return htmlString2
}