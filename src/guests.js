import { guestsDb } from "./database.js";

export const createGuests = () => {
  const guests = guestsDb();

  let guestsHTML = "<ul>";

  for (const guest of guests) {
    guestsHTML += `<li data-id="${guest.id}">${guest.guestName}</li>`;
  }

  guestsHTML += "</ul>";
  return guestsHTML;
};
