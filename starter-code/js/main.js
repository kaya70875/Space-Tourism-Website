const navItems = document.querySelectorAll('.list-item');

navItems.forEach(item => {
    item.addEventListener('click' ,function() {
        navItems.forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    })
});