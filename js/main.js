function setActiveStates(navItemClass) {
    const navItems = document.querySelectorAll(navItemClass);

    const previousItem = localStorage.getItem('activeItem');
    if(previousItem) {
        navItems.forEach(item => {
            if(item.textContent.trim() === previousItem.trim()) {
                item.classList.add('active');
            }
        })
    }

    navItems.forEach(item => {
        item.addEventListener('click' ,function() {
            navItems.forEach(el => el.classList.remove('active'));
            this.classList.add('active');
            localStorage.setItem('activeItem' , this.textContent.trim());
        })
    });
}

setActiveStates('.list-item');
setActiveStates('.ellipse-button');
  