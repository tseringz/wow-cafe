import video from './assets/students-in-cafe.mp4';

function createHeroPage() {
    const hero = document.createElement('div');
    hero.setAttribute('id', 'home-wrapper');
    hero.innerHTML = `<nav class="navbar-home">
                        <div class="menu-wrapper">
                        <div class="menu">
                        <a class="menu-home">Menu</a>
                        <a href="https://form.jotform.com/222239259686467" target="_blank">Reservation</a>
                        <a class="contact">Contact</a>
                        </div></div></nav>
                        <div class="contain-wrapper home">
                        <h1 class="heading1 home"><span class="word">VOW</span><br>&nbsp;<span class="word">CAFE</span></h1>
                        <video id="video" width="200" height="400"  autoplay="true" loop="true">
                        <source src="${video}" type="video/mp4"></video></div>
                        <div class="social-media">
                        <a class="text-link" href="https://careers.swiggy.com/#/" target="_blank">CAREER</a>
                        <a class="text-link" href="https://www.facebook.com/login.php" target="_blank">FACEBOOK</a>
                        <a class="text-link" href="https://www.instagram.com/accounts/login/" target="_blank">INSTAGRAM</a>
                        <a class="text-link" href="https://www.swiggy.com/privacy-policy" target="_blank">PRIVATE POLICY</a>
                        <a class="text-link" href="https://www.amazon.in/books/s?k=books" target="_blank">BOOKS</a>
                        </div>
                        `;
    return hero;
}

export default createHeroPage;