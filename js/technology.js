document.addEventListener('DOMContentLoaded', () => {
    fetch('./data.json')
      .then(response => response.json())
      .then(techData => {
        const techLinks = document.querySelectorAll('.numbers a');
        const techImage = document.querySelector('.tech-img img');
        const techHeader = document.getElementById('tech-header');
        const techInfo = document.getElementById('tech-info');
  
        function updateContent(tech) {
          // Apply a fade-out effect
          document.getElementById('content').classList.add('fade-out');
  
          setTimeout(() => {
            techImage.src = tech.images.portrait;
            techHeader.textContent = tech.name.toUpperCase();
            techInfo.textContent = tech.description;
  
            // Remove fade-out and add fade-in effect
            document.getElementById('content').classList.remove('fade-out');
            document.getElementById('content').classList.add('fade-in');
          }, 300); // Time in ms for the fade-out effect
        }
  
        techLinks.forEach(link => {
          link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link action
            
            const selectedTech = techData.technology.find(tech => tech.name.toLowerCase() === link.id.trim().toLowerCase());
            if (selectedTech) {
              updateContent(selectedTech);
            }
          });
        });
      });
  });
  