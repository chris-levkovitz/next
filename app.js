const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

//Showing active menu when scrolling//

const highlightMenu = () => {
    const element  = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const techMenu = document.querySelector('#tech-page')
    const productMenu = document.querySelector('#product-page')
    let scrollPos = window.scrollY

    //Add highlight class to my menu items//

    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        techMenu.classList.remove('highlight')
        productMenu.classList.remove('highlight')
        return
    }else if (window.innerWidth > 960 && scrollPos < 1200) {
        techMenu.classList.add('highlight')
        productMenu.classList.remove('highlight')
        homeMenu.classList.remove('highlight')
        return
    }else if (window.innerWidth > 960 && scrollPos < 1845) {
        productMenu.classList.add('highlight')
        techMenu.classList.remove('highlight')
        return
    }

    if ((element && windowInnerWidth < 960 && scrollPos < 600) || element) {
        element.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


//Close mobile menu when clicking on//

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars) {
       menu.classList.toggle('is-active');
       menuLinks.classList.remove('active');
    }

};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);