import { places } from "../data/places.mjs";
console.log(places);

const showHere = document.querySelector("#allplaces");

function displayItems(places) {
  places.forEach(x => {
    const thecard = document.createElement("div");

    const figure = document.createElement("figure");
    const thephoto = document.createElement("img");
    thephoto.src = `./images/${x.photo_url}`;
    thephoto.alt = x.name;
    thephoto.loading = "lazy";
    figure.appendChild(thephoto);

    const figcaption = document.createElement("figcaption");
    figcaption.innerText = x.name;
    figure.appendChild(figcaption);

    thecard.appendChild(figure);

    const thetitle = document.createElement("h2");
    thetitle.innerText = x.name;
    thecard.appendChild(thetitle);

    const theaddress = document.createElement("address");
    theaddress.innerText = x.address;
    thecard.appendChild(theaddress);

    const thedesc = document.createElement("p");
    thedesc.innerText = x.description;
    thecard.appendChild(thedesc);

    const learnMoreButton = document.createElement("button");
    learnMoreButton.innerText = "Learn More";
    thecard.appendChild(learnMoreButton);

    showHere.appendChild(thecard);
  });
}

displayItems(places);