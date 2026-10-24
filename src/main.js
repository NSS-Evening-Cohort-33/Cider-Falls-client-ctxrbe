// import { createDestinations } from './destinations.js'
import { createGuests } from "./guests.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<article class="details">
    <section class="details__destinations">
        <h2>Destinations</h2>
        replace this line with createDestinations()
    </section>
    <section class="details__guests">
        <h2>Current Park Guests</h2>
        ${createGuests()}
    </section>
</article>
`
mainContainer.innerHTML = applicationHTML