import video from './assets/students-in-cafe.mp4';
import createNavbar from './navbar';

function createHomePage() {
    const container = document.getElementById('content');
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'home-wrapper');
    newDiv.innerHTML = `<nav class="navbar-home">
                        <div class="menu-wrapper">
                        <div class="menu">
                        <a class="menu-home">Menu</a>
                        <a href="https://form.jotform.com/222239259686467" target="_blank">Reservation</a>
                        <a class="contact">Contact</a>
                        </div></div></nav>
                        <div class="contain-wrapper home">
                        <h1 class="heading1 home"><span class="word">WOW</span><br>&nbsp;<span class="word">CAFE</span></h1>
                        <video id="video" width="200" height="400"  autoplay loop="true">
                        <source src="${video}" type="video/mp4"></video></div>
                        <div class="social-media">
                        <a class="text-link" href="https://careers.swiggy.com/#/" target="_blank">CAREER</a>
                        <a class="text-link" href="https://www.facebook.com/login.php" target="_blank">FACEBOOK</a>
                        <a class="text-link" href="https://www.instagram.com/accounts/login/" target="_blank">INSTAGRAM</a>
                        <a class="text-link" href="https://www.swiggy.com/privacy-policy" target="_blank">PRIVATE POLICY</a>
                        <a class="text-link" href="https://www.amazon.in/books/s?k=books" target="_blank">BOOKS</a>
                        </div>
                        `;

    container.appendChild(newDiv);
    return container;
}

export default createHomePage;