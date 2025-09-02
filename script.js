async function fetchCharacters() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data.results.slice(0, 9);
  } catch (error) {
    console.error('Ошибка при получении персонажей:', error);
    return [];
  }
}

function renderCharacters(characters) {
  const charactersGrid = document.querySelector('.characters-grid');
  charactersGrid.innerHTML = '';

  let allCardsHTML = ''; 
    
  characters.forEach(character => {
    const firstTenEpisodes = character.episode.slice(0, 10);
    const episodesLinks = firstTenEpisodes.map(episodeUrl => {
      const episodeId = episodeUrl.split('/').pop();
      return `<a href="episodes.html?id=${episodeId}">${episodeId}</a>`;
    }).join(', ');

    allCardsHTML += ` 
      <div class="character-card">
        <img src="${character.image}" alt="${character.name}" />
        <h2>${character.name}</h2>
        <p>Статус: ${character.status}</p>
        <p><strong>Эпизоды:</strong> ${episodesLinks}</p>
      </div> 
    `;
  });
  
  charactersGrid.innerHTML = allCardsHTML; 
}

document.addEventListener('DOMContentLoaded', async () => {
  const characters = await fetchCharacters();
  renderCharacters(characters);
});
