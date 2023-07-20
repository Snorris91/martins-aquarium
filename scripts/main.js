
import { FishList } from './fish.js'
import { TipsList } from './tips.js'
import { LocalList } from './locations.js'



const parentHTMLElement = document.querySelector(".fish-first")
parentHTMLElement.innerHTML = FishList()

const parentHTMLElement2 = document.querySelector(".tips-first")
parentHTMLElement2.innerHTML = TipsList()

const parentHTMLElement3 = document.querySelector(".loca-first")
parentHTMLElement3.innerHTML = LocalList()