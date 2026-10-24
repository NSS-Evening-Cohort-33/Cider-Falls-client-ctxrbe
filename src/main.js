// import { createDestinations } from './destinations.js'
import { createGuests } from "./guests.js";


const mainContainer = document.querySelector("#container");

const applicationHTML = `
<section id="destination-container">
    <h2>Destionations</h2>
    insert createDestinations() function here
</section>
<section id="guests-container">
    <h2>Current Park Guests</h2>
      ${createGuests()}
</section>
`;
mainContainer.innerHTML = applicationHTML;
