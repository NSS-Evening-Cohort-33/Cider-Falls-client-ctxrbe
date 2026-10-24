import { DestinationServicesList } from './destinationServices.js'
import {destinationsDb, guestsDb} from './database.js'

const destinations = destinationsDb()
const guests = guestsDb()

export const createDestinations = () => {
    let html = ""
    //first loop to start looping through all of the destinations
    for (const destination of destinations) {
        html += `
        <h2 data-type="destination" data-id="${destination.id}" data-name="${destination.destinationName}" >${destination.destinationName}</h2>
        <h3>${destination.destinationName}, located in the ${destination.parkArea}, offers the following services:</h3>
        ${DestinationServicesList(destination.id)}
        `
    }
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        let guestCount = 0
        if (itemClicked.dataset.type === "destination") {
            for (const guest of guests) {
                if (guest.destinationId === parseInt(itemClicked.dataset.id)) {
                    guestCount++
                }
            }
            window.alert(`There are ${guestCount} guests in ${itemClicked.dataset.name}.`)
        }
    }
)
