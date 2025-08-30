async function fetchCharacters() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data.results.slice(0, 20);
  } catch (error) {
    console.error('Ошибка при получении персонажей:', error);
    return [];
  }
}

function renderCharacters(characters) {
  const listElement = document.querySelector('.characterList');
  listElement.innerHTML = ''; 
    characters.forEach(character => {
    const li = document.createElement('li');
    li.textContent = character.name;
    listElement.appendChild(li);
  });
}

const handleLoadButtonClick = async () => {
  const characters = await fetchCharacters();
  renderCharacters(characters);
};
const loadButton = document.querySelector('.loadButton');
loadButton.addEventListener('click', handleLoadButtonClick);
