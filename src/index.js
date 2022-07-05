import createHomePage from './home';
import createFoodPage from './foods';
import createNavbar from './navbar';
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
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
            homePage.style.display = 'none';
            navbarCloseAnimation();
            createFoodPage();
            console.log(navLink);

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



