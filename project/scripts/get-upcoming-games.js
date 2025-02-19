const gamesFile = './data/games.json';
const upcomingGames = document.querySelector('#upcoming-games');

async function getGamesData() {
  try {
    const response = await fetch(gamesFile);
    const data = await response.json();
    const games = data.upcomingGames.slice(0, 5);
    displayUpcomingGames(games);
  } catch (error) {
    console.error('Error fetching games data:', error);
  }
}

const displayUpcomingGames = (games) => {
  games.forEach(game => {
    const gameDiv = document.createElement('div');

    const gameTitle = document.createElement('div');
    gameTitle.classList.add('game-title');
    gameTitle.innerHTML = `
      <h4>${game.teamAName}</h4>
      <span id="versus">v/s</span>
      <h4>${game.teamBName}</h4>
    `;
    gameDiv.appendChild(gameTitle);

    const gameLocation = document.createElement('p');
    gameLocation.innerHTML = `<i class="fa fa-location-dot"></i> ${game.location}`;
    gameDiv.appendChild(gameLocation);

    const gameDate = document.createElement('p');
    const formattedDate = new Date(game.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    gameDate.innerHTML = `<i class="fa fa-calendar"></i> ${formattedDate}`;
    gameDiv.appendChild(gameDate);

    upcomingGames.appendChild(gameDiv);

    const divider = document.createElement('hr');
    upcomingGames.appendChild(divider);
  });
}

getGamesData();