
// database array
const database = {
    // fish is an object
    fish: [
        {
            // key: value,
            image: "",
            name: "Doug",
            species: "Catfish",
            length: 9,
            location: "Mississippi River",
            food: "Bacteria",
            
        },
        {
            // key: value,
            image: "",
            species: "Tilapia",
            length: 5,
            name: "Scott",
            location: "Keys",
            food: "Bacteria",
            
        },
        {
            // key: value,
            image: "",
            species: "Salmon",
            length: 3,
            name: "Sophia",
            location: "Atlantic Ocean",
            food: "Bacteria",
            
        },
        {
            // key: value,
            image: "",
            species: "Koi",
            length: 3,
            name: "Chuck",
            location: "South China Sea",
            food: "Bacteria",
            
        },
        {
            // key: value,
            image: "",
            species: "Swordfish",
            length: 6,
            name: "Leo",
            location: "Pacific Ocean",
            food: "Small Fish",
            
        },
        {
            // key: value,
            image: "",
            species: "Shark",
            length: 19,
            name: "Ben",
            location: "Gulf of Mexico",
            food: "Small Fish",
            
        },
        {
            // key: value,
            image: "",
            species: "Barracuda",
            length: 10,
            name: "Steve",
            location: "Tiger River",
            food: "Small Fish",
            
        },
    ],
    tips: [
        {
            name: "Tank 1",
            tankTemp: 76,
            sanitize: "Vinegar Solution",
            salinity: "32 ppt"
        },
        {
            name: "Tank 2",
            tankTemp: 52,
            sanitize: "Disinfectant",
            salinity: "35 ppt"
        },
        {
            name: "Tank 3",
            tankTemp: 72,
            sanitize: "Hydrogen Peroxide",
            salinity: "33 ppt"
        }
    ],
    locations: [
        {
            name: "Gulf of Mexico"
        },
        {
            name: "The Great Barrier Reef"
        },
        {
            name: "Sandy Shores"
        },
        {
            name: "Bikini Bottom"
        },
        {
            name: "St. Lucien"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getLoca = () => {
    return database.locations.map(locations => ({...locations}))
}