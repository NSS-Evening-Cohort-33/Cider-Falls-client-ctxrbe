const database = {
    guests: [
        {
            id: 1,
            guestName: "Pete Moss",
            destinationId: 3
        },{
            id: 2,
            guestName: "Skip Stone",
            destinationId: 1
        },{
            id: 3,
            guestName: "Marsha Mellow",
            destinationId: 6
        },{
            id: 4,
            guestName: "Cliff Hangarr",
            destinationId: 2
        },{
            id: 5,
            guestName: "Fern Galleigh",
            destinationId: 4
        },{
            id: 6,
            guestName: "Ima Hiker",
            destinationId: 3
        },{
            id: 7,
            guestName: "Perry Winnkelle",
            destinationId: 5
        },{
            id: 8,
            guestName: "Douglas Fir",
            destinationId: 1
        },{
            id: 9,
            guestName: "River Banks",
            destinationId: 4
        },{
            id: 10,
            guestName: "Forrest Greene",
            destinationId: 6
        },{
            id: 11,
            guestName: "Hunter Gather",
            destinationId: 2
        },{
            id: 12,
            guestName: "Skip Raucs",
            destinationId: 2
        },{
            id: 13,
            guestName: "Cole Miner",
            destinationId: 5
        },{
            id: 14,
            guestName: "Flint Stone",
            destinationId: 3
        },{
            id: 15,
            guestName: "Wade Waters",
            destinationId: 1
        },{
            id: 16,
            guestName: "Cam Pfyre",
            destinationId: 6
        },{
            id: 17,
            guestName: "Barbie Quew",
            destinationId: 4
        },{
            id: 18,
            guestName: "Trey'el Blazer",
            destinationId: 5
        },{
            id: 19,
            guestName: "Pat LeBourd",
            destinationId: 2
        },{
            id: 20,
            guestName: "Homer-Ron Therange",
            destinationId: 3
        }
    ],
    destinations: [
        {
            id: 1,
            destinationName: "Chamfort River",
            parkArea: "Northeast"
        },{
            id: 2,
            destinationName: "Lost Wolf Hiking Trail",
            parkArea: "North"
        },{
            id: 3,
            destinationName: "The Lodge",
            parkArea: "Northwest"
        },{
            id: 4,
            destinationName: "Gander River Natural Preserve",
            parkArea: "Southwest"
        },{
            id: 5,
            destinationName: "The Campgrounds",
            parkArea: "South"
        },{
            id: 6,
            destinationName: "Pine Bluffs Trails",
            parkArea: "Southeast"
        }
    ],
    services: [
        {
            id: 1,
            serviceName: "rafting"
        },{
            id: 2,
            serviceName: "canoeing"
        },{
            id: 3,
            serviceName: "fishing"
        },{
            id: 4,
            serviceName: "hiking"
        },{
            id: 5,
            serviceName: "picnicking"
        },{
            id: 6,
            serviceName: "rock climbing"
        },{
            id: 7,
            serviceName: "hotel"
        },{
            id: 8,
            serviceName: "restaurant"
        },{
            id: 9,
            serviceName: "lodging"
        },{
            id: 10,
            serviceName: "parking"
        },{
            id: 11,
            serviceName: "information"
        },{
            id: 12,
            serviceName: "office park"
        },{
            id: 13,
            serviceName: "childrens' play areas"
        },{
            id: 14,
            serviceName: "zip-lines"
        },{
            id: 15,
            serviceName: "food vendors"
        }
    ],
    destinationServices: [ 
        {
            id: 1,
            destinationId: 1,
            serviceId: 1
        },{
            id: 2,
            destinationId: 1,
            serviceId: 2
        },{
            id: 3,
            destinationId: 1,
            serviceId: 3
        },{
            id: 4,
            destinationId: 4,
            serviceId: 3
        },{
            id: 5,
            destinationId: 2,
            serviceId: 4
        },{
            id: 6,
            destinationId: 4,
            serviceId: 4
        },{
            id: 7,
            destinationId: 6,
            serviceId: 4
        },{
            id: 8,
            destinationId: 2,
            serviceId: 5
        },{
            id: 9,
            destinationId: 3,
            serviceId: 5
        },{
            id: 10,
            destinationId: 6,
            serviceId: 5
        },{
            id: 11,
            destinationId: 2,
            serviceId: 6
        },{
            id: 12,
            destinationId: 3,
            serviceId: 7
        },{
            id: 13,
            destinationId: 3,
            serviceId: 8
        },{
            id: 14,
            destinationId: 3,
            serviceId: 9
        },{
            id: 15,
            destinationId: 5,
            serviceId: 9
        },{
            id: 16,
            destinationId: 3,
            serviceId: 10
        },{
            id: 17,
            destinationId: 5,
            serviceId: 10
        },{
            id: 18,
            destinationId: 3,
            serviceId: 11
        },{
            id: 19,
            destinationId: 5,
            serviceId: 11
        },{
            id: 20,
            destinationId: 5,
            serviceId: 12
        },{
            id: 21,
            destinationId: 5,
            serviceId: 13
        },{
            id: 22,
            destinationId: 6,
            serviceId: 14
        },{
            id: 23,
            destinationId: 6,
            serviceId: 15
        }
    ]
}

export const guestsDb = () => {
    return structuredClone(database.guests)
}

export const destinationsDb = () => {
    return structuredClone(database.destinations)
}

export const servicesDb = () => {
    return structuredClone(database.services)
}

export const destinationServicesDb = () => {
    return structuredClone(database.destinationServices)
}
