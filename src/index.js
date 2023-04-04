import createNavbar from './navbar';
import createHeroPage from './home';
import createContactPage from './contact';
import createFoodPage from './foods';
import createMusicPage from './music';
import createLibraryPage from './library';
import createEventsPage from './events';
import { headingAnimation, navbarAnimation, navbarCloseAnimation } from './anime';
import './style/main.scss';

let container = document.getElementById('content'); // Container for every page section in webpages
createNavbar(); // Hidden Navbar which is permanent in every webpages
container.appendChild(createHeroPage()); // Add hero section to the container
headingAnimation();


let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.list-item');
function navigateNavLinks(){
    const contactButton = document.querySelector('.contact');
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
    navigateNavLinks();


    function openMenu(){
        const menuItems = document.querySelector('.menu-home');
        const  menuBtn = document.querySelector('.menu-btn');
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
        const menuBar = document.querySelector('.icon-wrapper');
        menuBar.addEventListener('click', function(e){
            e.preventDefault();
            navbarCloseAnimation();
        });
    
    }
    closeMenu();



function backToHome() {
    const homeBtn = document.querySelector('.home-btn');
    homeBtn.addEventListener('click', function(e) { 
        e.preventDefault();
        navbar.style.display = 'none';
        container.textContent = '';
        heroSectionLoader();
        navigateNavLinks();
        openMenu();
        });
    }
backToHome();





