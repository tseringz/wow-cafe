import createHomePage from './home';
import createFoodPage from './foods';
import headingAnimation from './anime';
import createNavbar from './navbar';
import './style/main.scss';

// 
createHomePage();
headingAnimation();

function tabMenu(){
    const menuItems = document.querySelector('.menu-btn');
    menuItems.addEventListener('click', function(e){
        e.preventDefault();
        createNavbar();
    });

}
tabMenu();

