const membersFile = './data/members.json';
const cards = document.querySelector('#cards');

async function getMembersData() {
    const response = await fetch(membersFile);
    const data = await response.json();
    displayMembers(data.members);
  }

  const displayMembers = (members) => {
    members.forEach((member) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let iconFilename = document.createElement('img');
      let name = document.createElement('h2');
      let address = document.createElement('p');
      let phoneNumber = document.createElement('p');
      let website = document.createElement('a');
      let memberLevel = "Member";
      let membershipLevel = document.createElement('p');
      let memberSince = document.createElement('p');

      // Build the image iconFilename by setting all the relevant attributes
      iconFilename.setAttribute('src', `./images/${member.iconfilename}`);
      iconFilename.setAttribute('alt', `${member.name}`);
      iconFilename.setAttribute('loading', 'lazy');
      iconFilename.setAttribute('width', '200');
      iconFilename.setAttribute('height', 'auto');

      // Build the content
      name.textContent = `${member.name}`;
      address.textContent= `${member.address}`;
      phoneNumber.textContent = `${member.phonenumber}`;
      website.textContent = `${member.website}`;
      // Set membership level
      if (member.membershiplevel === 2) {
        memberLevel = 'Silver';
      } else if (member.membershiplevel === 3) {
        memberLevel = 'Gold';
      }
      membershipLevel.textContent = `Membership Level: ${memberLevel}`;
      memberSince.textContent = `Member Since: ${member.membersince}`;

      // Append the section(card) with the created elements
      card.appendChild(iconFilename);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phoneNumber);
      card.appendChild(website);
      card.appendChild(membershipLevel);
      card.appendChild(memberSince);

      cards.appendChild(card);
    });
  }

  getMembersData();