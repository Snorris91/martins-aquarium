import { getLoca } from "./database.js";

const locations = getLoca()

export const LocalList = () => {
    const location = locations

    let htmlString3 = `<article class="locaList"> 
    <div class="title"><h3>Places Traveled</h3></div>
    `

    for (const locate of location) {

        htmlString3 += ` <section class="loca-card">
            
            <div class="loca_name">${locate.name}</div>
        </section>
`
    }
    htmlString3 += `</article>`

    return htmlString3
}