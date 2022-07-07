import createNavbar from './navbar';
import createHomePage from './home';
import createFoodPage from './foods';
import createMusicPage from './music';
import createLibraryPage from './library';
import createEventsPage from './events';
import { headingAnimation, navbarAnimation, navbarCloseAnimation } from './anime';
import './style/main.scss';

// 
createHomePage();
headingAnimation();
createNavbar();

const menuItems = document.querySelector('.menu-btn');

function navigateLink(){
    const navLinks = document.querySelectorAll('.list-item');
    const homePage = document.getElementById('home-wrapper');
    navLinks.forEach((navLink, index) => {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
            if(index === 0) {
                homePage.remove();
                navbarCloseAnimation();
                createMusicPage();
                console.log(navLink);
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



