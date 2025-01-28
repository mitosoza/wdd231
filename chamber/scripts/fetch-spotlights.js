const membersFile = './data/members.json';
const cards = document.querySelector('#spotlights-cards');

async function getSpotlightsData() {
  const response = await fetch(membersFile);
  const data = await response.json();
  //console.log("Spotlight Data: ", data);
  displaySpotlights(data.members);
}

const displaySpotlights = (members) => {
  const spotlightMembers = members.filter(member => member.membershiplevel === 2 || member.membershiplevel === 3);
  const shuffledMembers = spotlightMembers.sort(() => 0.5 - Math.random());
  const selectedMembers = shuffledMembers.slice(0, 3);

  selectedMembers.forEach((member) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let iconFilename = document.createElement('img');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let website = document.createElement('a');
    let memberLevel = "Member";
    let membershipLevel = document.createElement('p');

    // Build the image iconFilename by setting all the relevant attributes
    iconFilename.setAttribute('src', `./images/${member.iconfilename}`);
    iconFilename.setAttribute('alt', `${member.name}`);
    iconFilename.setAttribute('loading', 'lazy');
    iconFilename.setAttribute('width', '200');
    iconFilename.setAttribute('height', 'auto');

    // Build the content
    name.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    phoneNumber.textContent = `${member.phonenumber}`;
    website.textContent = `${member.website}`;
    website.setAttribute('href', member.website);
    website.setAttribute('target', '_blank');

    // Set membership level
    if (member.membershiplevel === 2) {
        memberLevel = 'Silver';
    } else if (member.membershiplevel === 3) {
        memberLevel = 'Gold';
    }
    membershipLevel.textContent = `Membership Level: ${memberLevel}`;

    // Append the section(card) with the created elements
    card.appendChild(iconFilename);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(website);
    card.appendChild(membershipLevel);

    cards.appendChild(card);
  });
}

getSpotlightsData();