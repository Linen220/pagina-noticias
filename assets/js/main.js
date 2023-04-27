const menuBurger = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuClose = document.querySelector('.close');
const backdrop = document.querySelector('.backdrop');

menuBurger.addEventListener('click', toggleMenuMobile);
menuClose.addEventListener('click', toggleMenuClose);
backdrop.addEventListener('click', toggleMenuClose)

function toggleMenuMobile(){
    menuMobile.classList.toggle('inactive');
    backdrop.classList.toggle('inactive');
}

function toggleMenuClose(){
    menuMobile.classList.add('inactive');
    backdrop.classList.toggle('inactive');
}