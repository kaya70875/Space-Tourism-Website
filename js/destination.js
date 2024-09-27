document.addEventListener('DOMContentLoaded', () => {
    fetch('./data.json')
      .then(response => response.json())
      .then(planetsData => {
        const planetLinks = document.querySelectorAll('.destination-picker a');
        const planetImage = document.querySelector('.destination-place img');
        const planetName = document.querySelector('.planet-name h2');
        const planetDescription = document.querySelector('.planet-info');
        const planetDistance = document.querySelector('.distance h2');
        const planetTravelTime = document.querySelector('.time h2');
  
        function updateContent(planet) {
          // Apply a fade-out effect
          document.getElementById('content').classList.add('fade-out');
  
          setTimeout(() => {
            planetImage.src = planet.images.webp;
            planetName.textContent = planet.name.toUpperCase();
            planetDescription.textContent = planet.description;
            planetDistance.textContent = planet.distance;
            planetTravelTime.textContent = planet.travel;
  
            // Remove fade-out and add fade-in effect
            document.getElementById('content').classList.remove('fade-out');
            document.getElementById('content').classList.add('fade-in');
          }, 300); // Time in ms for the fade-out effect
        }
  
        planetLinks.forEach(link => {
          link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link action
            
            const selectedPlanet = planetsData.destinations.find(planet => planet.name.toLowerCase() === link.textContent.trim().toLowerCase());
            if (selectedPlanet) {
              updateContent(selectedPlanet);
            }
          });
        });
      });
  });
  