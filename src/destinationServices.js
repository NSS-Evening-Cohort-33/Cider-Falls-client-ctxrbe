import { destinationServicesDb, servicesDb } from './database.js'

export const DestinationServicesList = (destinationId)=> {
    const destinations = destinationServicesDb()
    const services = servicesDb()

    let destinationServiceHTML = `<ul>`
    for (const destinationService of destinations) {
        if (destinationId === destinationService.destinationId) {
            for (const service of services) {
                if (destinationService.serviceId === service.id) {
                    destinationServiceHTML += `<li>${service.serviceName}</li>`
                }
            }
        }
    }
    destinationServiceHTML += `</ul>`
    return destinationServiceHTML
}

