import createNavbar from './navbar';
import createHomePage from './home';
import createContactPage from './contact';
import createFoodPage from './foods';
import createMusicPage from './music';
import createLibraryPage from './library';
import createEventsPage from './events';
import { headingAnimation, navbarAnimation, navbarCloseAnimation } from './anime';
import './style/main.scss';

//
const navContainer = document.getElementById('navbar-wrapper');
let container = document.getElementById('content');
let navbar = document.querySelector('.navbar');
const homeBtn = document.querySelector('.home-btn');
let navLinks = document.querySelectorAll('.list-item');


function homePageLoader() {
    createNavbar();
    createHomePage();
    headingAnimation();
    const menuItems = document.querySelector('.menu-home');
    navLinks = document.querySelectorAll('.list-item');
    container = document.getElementById('content');
    navbar = document.querySelector('.navbar');
    const  menuBtn = document.querySelector('.menu-btn');
    const menuBar = document.querySelector('.icon-wrapper');
    const contactButton = document.querySelector('.contact');

    function navigateLink(){
        contactButton.addEventListener('click', function(e) {
            e.preventDefault();
            navbar.style.display = 'flex';
            container.textContent = '';
            container.appendChild(createContactPage());
        });
        navLinks.forEach((navLink, index) => {
            navLink.addEventListener('click', function(e) {
                e.preventDefault();
                navbar.style.display = 'flex';
                container.textContent = '';
                navbarCloseAnimation();
    
                if(index === 0) {
                    container.appendChild(createFoodPage());
                    console.log(navLink);
                } else if (index === 1) {
                    container.appendChild(createLibraryPage());
                } else if (index === 2) {
                    container.appendChild(createEventsPage());
    
                } else {
                   container.appendChild(createMusicPage());
                }
                
            });
        });
    
    }
    navigateLink();

    function openMenu(){
        menuItems.addEventListener('click', function(e){
            e.preventDefault();
            navbarAnimation();
        });
    
        menuBtn.addEventListener('click', function(e){
            e.preventDefault();
            navbarAnimation();
        });
    }
    openMenu();

    function closeMenu() {
        menuBar.addEventListener('click', function(e){
            e.preventDefault();
            navbarCloseAnimation();
        });
    
    }
    closeMenu();
}
homePageLoader();

homeBtn.addEventListener('click', function(e) { 
    e.preventDefault();
    navbar.style.display = 'none';
    container.textContent = '';
    navContainer.textContent = '';
    homePageLoader();
});








