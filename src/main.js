import { createDestinations } from './destinations.js'
import { createGuests } from "./guests.js";
import { createServices } from "./services.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<article class="details">
    <section class="details__destinations">
        <h2>Destinations</h2>
        ${createServices()}
        ${createDestinations()}
    </section>
    <section class="details__guests">
        <h2>Current Park Guests</h2>
        ${createGuests()}
    </section>
</article>
`
mainContainer.innerHTML = applicationHTML