import video from './assets/students-in-cafe.mp4';

function createHomePage() {

    const container = document.getElementById('content');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `<nav class="navbar">
                        <div class="menu-wrapper">
                        <div class="menu">
                        <a href="">Menu</a>
                        <a href="">Reservation</a>
                        <a href="">Contact</a>
                        </div></div></nav>
                        <div class="contain-wrapper home">
                        <h1 class="heading1 home">WOW <br>&nbsp;CAFE</h1>
                        <video id="video" width="200" height="400" autoplay="true" loop="true">
                        <source src="${video}" type="video/mp4"></video></div>
                        <footer id="footer" class="footer">
                        <a class="text-link" href="">CAREER</a>
                        <a class="text-link" href="">FACEBOOK</a>
                        <a class="text-link" href="">INSTAGRAM</a>
                        <a class="text-link" href="">PRIVATE POLICY</a>
                        <a class="text-link" href="">BOOKS</a>
                        </footer>
                        `;

    container.appendChild(newDiv);

}

export default createHomePage;