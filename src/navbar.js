// Wrap every letter in a span
function createNavbar() {
    const container = document.getElementById('content');
    const content = document.getElementById('home-wrapper');
    const newDiv = document.createElement("div");
    newDiv.classList.add('navbar-nav');
    newDiv.innerHTML = `<div class='container'>
                        <div class="menu-container"><a href="">Reservation</a></div>
                        <a class="icon-wrapper">
                        <div class="icon-top"></div>
                        <div class="icon-bottom"></div></a>
                        <div class="menu-link-wrapper">
                        <div class="list-item first"><a class="text-link first" href="">FOOD & DRINKS</a></div>
                        <div class="list-item second"><a class="text-link second" href="">LIBRARY</a></div>
                        <div class="list-item third"><a class="text-link third" href="">EVENTS</a></div>
                        <div class="list-item forth"><a class="text-link forth" href="">MUSIC STUDIO</a></div></div>
                        <h2 class="menu-heading">WOW<br>&nbsp;CAFE</h2>

                        </div>`;
    
    container.appendChild(newDiv);

}
export default createNavbar;