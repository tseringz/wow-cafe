import createHomePage from './home';
import createFoodPage from './foods';
import createNavbar from './navbar';
import { headingAnimation, navbarAnimation, navbarCloseAnimation } from './anime';
import './style/main.scss';

// 
createHomePage();
headingAnimation();
createNavbar();

function openMenu(){
    const menuItems = document.querySelector('.menu-btn');
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



