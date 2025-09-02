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
    allCardsHTML += ` 
      <div class="character-card">
        <img src="${character.image}" alt="${character.name}" />
        <h2>${character.name}</h2>
        <p>Статус: ${character.status}</p>
      </div> 
    `;
  });
  
  charactersGrid.innerHTML = allCardsHTML; 
}

const handleLoadButtonClick = async () => {
  const characters = await fetchCharacters();
  renderCharacters(characters);
};
const loadButton = document.querySelector('.loadButton');
loadButton.addEventListener('click', handleLoadButtonClick);
