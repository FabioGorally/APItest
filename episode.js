document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const episodeId = urlParams.get('id');

  if (episodeId) {
    fetchAndRenderEpisode(episodeId);
  } else {
    titleElement.textContent = 'Ошибка';
  }
});

async function fetchAndRenderEpisode(id) {
  const titleElement = document.querySelector('.episode-title');
  const infoContainer = document.querySelector('.episode-info');

  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  const episode = await response.json();

  titleElement.textContent = episode.name;
  infoContainer.innerHTML = `
    <p>Код эпизода: ${episode.episode}</p>
    <p>Дата выхода: ${episode.air_date}</p>
  `;
}