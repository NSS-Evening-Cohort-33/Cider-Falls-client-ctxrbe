import {destinationServicesDb, servicesDb} from './destinationServices.js'
import {destinationsDb, guestsDb} from './database.js'
const destinations = destinationsDb()
const destinationServices = destinationServicesDb()
const services = servicesDb()
const guests = guestsDb()

export const createDestinations = () => {
    let html = ""
    //first loop to start looping through all of the destinations
    for (const destination of destinations) {
        html += `
        <h2 data-type="destination" data-id="${destination.id}" data-name="${destination.name}" >${destination.destinationName}</h2>
        <h3>${destination.destinationName}, located in the ${destination.parkArea}, offers the following services:</h3>
        <ul>
        `

        //need to loop through destinationServices array and find the objects with the destinationId matching our curent destination.id object in the main loop.  Then once we have that object, we need another for loop through the services array where we compare the servicesId foreign key to the service.id of that current object in the loop.  If THAT matches, we then add the service.serviceName of that current object to the html below and then it will start all over again and loop through all objects in both arrays. COULD ALSO USE .FIND() AS THE LAST LOOP SINCE WE JUST NEED TO FIND AND RETURN A SINGLE SERVICE WITH THE ID THAT MATCHES THE FOREIGN KEY SERVICEID

        // swap innermost for loop for .find and try to use .filter for the 2nd for loop, would need to store results in a new array and then loop through that but might increase readibility 

        for (const item of destinationServices) {
            if (destination.id === item.destinationId) {
                for (const service of services) {
                    if (service.id === item.serviceId) {
                        html += `<li>${service.serviceName}</li>`
                    }
                }   
            }
        }
        html += "</ul>"
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
            windowAlert(`There are ${guestCount} guests in ${itemClicked.dataset.name}.`)
        }
    }
)