import { servicesDb, destinationServicesDb, destinationsDb } from './database.js'

export const createServices = () => {
    //build a <ul> with one <li> per service, with the three data attributes 
    let serviceHTML = `<ul>`
    const services = servicesDb()

    for (const service of services) {
        serviceHTML += `<li data-type="service" data-id="${service.id}" data-name="${service.serviceName}">${service.serviceName}</li>`
        }
    serviceHTML += `</ul>`
    return serviceHTML
}

document.addEventListener("click", (clickEvent) => {
    
    const itemClicked = clickEvent.target

    if (itemClicked.dataset.type === "service") {
        const serviceId = parseInt(itemClicked.dataset.id)
        let names = ""

        for (const row of destinationServicesDb()) {
            if (row.serviceId === serviceId) {
                for (const destination of destinationsDb()) {
                    if (destination.id === row.destinationId) {
                        if (names !== "") {
                            names += ", "
                        }
                        names += destination.destinationName
                    }
                }
            }
        }

        window.alert(`${itemClicked.dataset.name} is offered at: ${names}`)
    }
})
