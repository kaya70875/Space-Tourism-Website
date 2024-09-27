const navButtons = document.querySelectorAll('.ellipse-button');

const previousButton = localStorage.getItem('activeItem');
if (previousButton) {
    navButtons.forEach(item => {
        if(item.textContent.trim() === previousButton.trim()) {
            item.classList.add('active');
        }
    })
}

navButtons.forEach(item => {
  item.addEventListener('click' ,function() {
      navButtons.forEach(el => el.classList.remove('active'));
      this.classList.add('active');
      localStorage.setItem('activeItem' , this.textContent.trim());
  })
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('./data.json')
      .then(response => response.json())
      .then(crewData => {
        const crewLinks = document.querySelectorAll('.ellipse-section a');
        const crewImage = document.querySelector('.crew-img img');
        const crewJob = document.getElementById('person-job');
        const crewName = document.getElementById('person-name');
        const crewInfo = document.getElementById('person-info');
  
        function updateContent(crew) {
          // Apply a fade-out effect
          document.getElementById('content').classList.add('fade-out');
  
          setTimeout(() => {
            crewImage.src = crew.images.webp;
            crewName.textContent = crew.name.toUpperCase();
            crewJob.textContent = crew.role;
            crewInfo.textContent = crew.bio;
  
            // Remove fade-out and add fade-in effect
            document.getElementById('content').classList.remove('fade-out');
            document.getElementById('content').classList.add('fade-in');
          }, 300); // Time in ms for the fade-out effect
        }
  
        crewLinks.forEach(link => {
          link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link action
            
            const selectedCrew = crewData.crew.find(crew => crew.name.toLowerCase() === link.id.trim().toLowerCase());
            if (selectedCrew) {
              updateContent(selectedCrew);
            }
          });
        });
      });
  });
  