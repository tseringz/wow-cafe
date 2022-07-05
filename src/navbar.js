// Wrap every letter in a span


function createNavbar() {
    const container = document.getElementById('content');
    const content = document.getElementById('home-wrapper');
    const newDiv = document.createElement("div");
    newDiv.setAttribute('id', 'navbar-bar');
    newDiv.innerHTML = `<div class='container'>
                        <div class="menu-wrapper"><a href="">Reservation</a></div>
                        <div class="icon-wrapper">
                        <div class="icon-top"></div>
                        <div class="icon-bottom"></div></div>
                        <div class="nav-link-wrapper">
                        <a href="">FOOD & DRINKS</a>
                        <a href="">LIBRARY</a>
                        <a href="">EVENTS</a>
                        <a href="">MUSIC STUDIO</a></div>
                        </div>
                        <h2>WOW<br>&nbsp;CAFE</h2>
                        </div>`;
    
    container.appendChild(newDiv);

}
export default createNavbar;