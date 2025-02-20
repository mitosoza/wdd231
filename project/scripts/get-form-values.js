const currentUrl = window.location.href;
const everything = currentUrl.split('?');
let formData = everything[1].split('&');

function show(cup) {
  let result = '';
  formData.forEach((element) => {
    if (element.startsWith(cup)) {
      result = decodeURIComponent(element.split('=')[1]).replace(/\+/g, ' ');
    }
  });
  return result;
}

const showInfo = document.querySelector('#form-results');
showInfo.innerHTML = `
  <label><span class="title">First Name:</span> <span>${show('first-name')}</span></label>
  <label><span class="title">Last Name:</span> <span>${show('last-name')}</span></label>
  <label><span class="title">Team Name:</span> <span>${show('team-name')}</span></label>
  <label><span class="title">Email:</span> <a href="mailto:${show('email')}">${show('email')}</a></label>
  <label><span class="title">Cell Phone:</span> <span>${show('cell-phone')}</span></label>
  <label><span class="title">Membership Level:</span> <span>${show('membership-level')}</span></label>
  <label><span class="title">Team Description:</span> <span>${show('team-description')}</span></label>
  <label><span class="title">Timestamp:</span> <span>${new Date(show('timestamp'))}</span></label>
`;