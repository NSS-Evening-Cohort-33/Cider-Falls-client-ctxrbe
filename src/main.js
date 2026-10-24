import { createDestinations } from './destinations.js'
import { createGuests } from "./guests.js";
import { createServices } from "./services.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<article class="details">
    <section class="details__destinations">
        <h2>Destinations</h2>
        ${createDestinations()}
    </section>
    <section class="details__guests">
        <h2>Current Park Guests</h2>
        ${createGuests()}
    </section>
    <section class="details__services">
        <h2>Services</h2>
        ${createServices()}
    </section>
</article>
`
mainContainer.innerHTML = applicationHTML