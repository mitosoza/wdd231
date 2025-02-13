document.addEventListener('DOMContentLoaded', () => {
  const lastVisitSpan = document.getElementById('lastVisit');
  const lastVisit = localStorage.getItem('lastVisit');
  const currentVisit = Date.now();

  if (!lastVisit) {
    lastVisitSpan.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const lastVisitDate = new Date(parseInt(lastVisit));
    const timeDifference = currentVisit - lastVisitDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
      lastVisitSpan.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
      lastVisitSpan.textContent = "You last visited 1 day ago.";
    } else {
      lastVisitSpan.textContent = `You last visited ${daysDifference} days ago.`;
    }
  }

  localStorage.setItem('lastVisit', currentVisit);
});