const resultsFile = './data/games.json';
const gameResults = document.querySelector('#game-results');

async function gameResultsData() {
  try {
    const response = await fetch(resultsFile);
    const data = await response.json();
    const games = data.pastGames.slice(0, 6);
    displaygameResults(games);
  } catch (error) {
    console.error('Error fetching games data:', error);
  }
}

const displaygameResults = (games) => {
  games.forEach(game => {
    const resultsDiv = document.createElement('div');

    const resultsTitle = document.createElement('div');
    resultsTitle.classList.add('result-title');
    resultsTitle.innerHTML = `
      <h4>${game.teamAName}</h4>
      <span id="score">${game.teamAScore} - ${game.teamBScore}</span>
      <h4>${game.teamBName}</h4>
    `;
    resultsDiv.appendChild(resultsTitle);

    const gameLocation = document.createElement('p');
    const formattedDate = new Date(game.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    gameLocation.innerHTML = `
    <i class="fa fa-location-dot"></i>
    ${game.location} / ${formattedDate}
    `;
    resultsDiv.appendChild(gameLocation);
    gameResults.appendChild(resultsDiv);

    const divider = document.createElement('hr');
    gameResults.appendChild(divider);
  });
}

gameResultsData();