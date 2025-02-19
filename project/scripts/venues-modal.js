import { venues } from "../data/venues.mjs";

const dialogBox = document.querySelector('#dialogBox');
const dialogBoxTitle = dialogBox.querySelector('#dialog-header h3');
const dialogBoxText = dialogBox.querySelector('#dialog-content');
const closeButton = document.querySelector('#closeButton');

function displayVenueModal(venues) {
  venues.forEach(x => {
    const openButton = document.querySelector(`#${x.id}`);

    openButton.addEventListener('click', () => {
      dialogBox.showModal();
      dialogBoxTitle.innerText = x.name;
      dialogBoxText.innerHTML = `
      <p>${x.description}</p>
      <ul>
        <li><i class="fa fa-location-dot"></i>${x.address}</li>
        <li><i class="fa fa-phone"></i>${x.phone}</li>
        <li><i class="fa fa-envelope"></i><a href="mailto:${x.email}">${x.email}</a></li>
        <li><i class="fa fa-globe"></i><a href="${x.website}" target="_blank">${x.website}</a></li>
      </ul>
      `;
    });
  });
}

closeButton.addEventListener('click', () => {
  dialogBox.close();
});

displayVenueModal(venues);