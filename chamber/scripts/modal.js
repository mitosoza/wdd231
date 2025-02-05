const dialogBox = document.querySelector('#dialogBox');
const dialogBoxTitle = dialogBox.querySelector('#dialog-header h3');
const dialogBoxText = dialogBox.querySelector('#dialog-content');
const closeButton = document.querySelector('#closeButton');

const openNPButton = document.querySelector('#openNPButton');
const openBronzeButton = document.querySelector('#openBronzeButton');
const openSilverButton = document.querySelector('#openSilverButton');
const openGoldButton = document.querySelector('#openGoldButton');

openNPButton.addEventListener('click', () => {
  dialogBox.showModal();
  dialogBoxTitle.innerHTML = 'Non Profit Membership Level';
  dialogBoxText.innerHTML = `
  <span>Benefits include:</span>
  <ul>
    <li>Trainings</li>
    <li>Price: Free</li>
  </ul>
  `;
});

openBronzeButton.addEventListener('click', () => {
  dialogBox.showModal();
  dialogBoxTitle.innerHTML = 'Bronze Membership Level';
  dialogBoxText.innerHTML = `
  <span>Benefits include:</span>
  <ul>
    <li>Trainings</li>
    <li>10% Events Discount</li>
    <li>Price: $80/year</li>
  </ul>
  `;
});

openSilverButton.addEventListener('click', () => {
  dialogBox.showModal();
  dialogBoxTitle.innerHTML = 'Silver Membership Level';
  dialogBoxText.innerHTML = `
  <span>Benefits include:</span>
  <ul>
    <li>Trainings</li>
    <li>20% Events Discount</li>
    <li>Spotlight Position</li>
    <li>Price: $100/year</li>
  </ul>
  `;
});

openGoldButton.addEventListener('click', () => {
  dialogBox.showModal();
  dialogBoxTitle.innerHTML = 'Gold Membership Level';
  dialogBoxText.innerHTML = `
  <span>Benefits include:</span>
  <ul>
    <li>Advertizements</li>
    <li>Trainings</li>
    <li>30% Events Discount</li>
    <li>Spotlight Position</li>
    <li>Price: $120/year</li>
  </ul>
  `;
});

closeButton.addEventListener('click', () => {
  dialogBox.close();
});
