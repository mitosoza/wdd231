const currentYear = document.querySelector("#currentYear");
const today = new Date();

currentYear.innerHTML = `&copy; ${today.getFullYear()}`;