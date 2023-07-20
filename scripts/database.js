
// database array
const database = {
    // fish is an object
    fish: [
        {
            // key: value,
            image: "https://files.osgnetworks.tv/15/files/2013/06/How-To-Fish-For-Catfish.jpg",
            name: "Doug",
            species: "Catfish",
            length: 9,
            location: "Mississippi River",
            food: "Bacteria",
            
        },
        {
            // key: value,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Oreochromis-niloticus-Nairobi.JPG/260px-Oreochromis-niloticus-Nairobi.JPG",
            species: "Tilapia",
            length: 5,
            name: "Scott",
            location: "Keys",
            food: "Bacteria",
            
        },
        {
            // key: value,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Oncorhynchus_masou_02.jpg/120px-Oncorhynchus_masou_02.jpg",
            species: "Salmon",
            length: 3,
            name: "Sophia",
            location: "Atlantic Ocean",
            food: "Bacteria",
            
        },
        {
            // key: value,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Ojiya_Nishikigoi_no_Sato_ac_%283%29.jpg/220px-Ojiya_Nishikigoi_no_Sato_ac_%283%29.jpg",
            species: "Koi",
            length: 3,
            name: "Chuck",
            location: "South China Sea",
            food: "Bacteria",
            
        },
        {
            // key: value,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Swordfish_natural_environment.jpg/220px-Swordfish_natural_environment.jpg",
            species: "Swordfish",
            length: 6,
            name: "Leo",
            location: "Pacific Ocean",
            food: "Small Fish",
            
        },
        {
            // key: value,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/220px-White_shark.jpg",
            species: "Shark",
            length: 15,
            name: "Ben",
            location: "Gulf of Mexico",
            food: "Small Fish",
            
        },
        {
            // key: value,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Barracuda_laban.jpg/250px-Barracuda_laban.jpg",
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