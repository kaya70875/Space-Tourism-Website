const primaryNav = document.querySelector('.nav-section');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click' , () => {
    const isVisible = primaryNav.getAttribute('data-visible');

    if(isVisible === "false"){
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if(isVisible === "true"){
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})