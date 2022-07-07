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
    const foodPage = document.getElementById('home-wrapper');
    const libraryPage = document.getElementById('home-wrapper');
    const musicPage = document.getElementById('home-wrapper');
    const eventsPage = document.getElementById('home-wrapper');
    navLinks.forEach((navLink, index) => {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
            if(index === 0) {
                homePage.remove();
                libraryPage.remove();
                musicPage.remove();
                eventsPage.remove();
                navbarCloseAnimation();
                createFoodPage();
                console.log(navLink);
            } else if (index === 1) {
                homePage.remove();
                foodPage.remove();
                musicPage.remove();
                eventsPage.remove();
                navbarCloseAnimation();
                createLibraryPage();

            } else if (index === 2) {
                homePage.remove();
                foodPage.remove();
                libraryPage.remove();
                musicPage.remove();
                navbarCloseAnimation();
                createEventsPage();

            } else {
                homePage.remove();
                foodPage.remove();
                libraryPage.remove();
                eventsPage.remove();
                navbarCloseAnimation();
                createMusicPage();

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



