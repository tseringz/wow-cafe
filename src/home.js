import video from './assets/students-in-cafe.mp4';

function createHomePage() {
    
    const container = document.getElementById('content');
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'home-wrapper');
    newDiv.innerHTML = `<nav class="navbar">
                        <div class="menu-wrapper">
                        <div class="menu">
                        <a class="menu-btn" href="">Menu</a>
                        <a href="">Reservation</a>
                        <a href="">Contact</a>
                        </div></div></nav>
                        <div class="contain-wrapper home">
                        <h1 class="heading1 home"><span class="word">WOW</span><br>&nbsp;<span class="word">CAFE</span></h1>
                        <video id="video" width="200" height="400" autoplay="true" loop="true">
                        <source src="${video}" type="video/mp4"></video></div>
                        <div class="social-media">
                        <a class="text-link" href="">CAREER</a>
                        <a class="text-link" href="">FACEBOOK</a>
                        <a class="text-link" href="">INSTAGRAM</a>
                        <a class="text-link" href="">PRIVATE POLICY</a>
                        <a class="text-link" href="">BOOKS</a>
                        </div>
                        `;

    container.appendChild(newDiv);

}

export default createHomePage;