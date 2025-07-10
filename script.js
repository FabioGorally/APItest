document.getElementById('loadButton').addEventListener('click', () => {
      const listElement = document.getElementById('characterList');
      listElement.innerHTML = '';

fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
       const characters = data.results.slice(0, 20);
        console.log("Первые 20 персонажей:", characters);
        const listElement = document.getElementById('characterList');
        characters.forEach(character => {
          const li = document.createElement('li');
          li.textContent = character.name;
          listElement.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Ошибка', error);
      });
      });