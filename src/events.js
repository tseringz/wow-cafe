import heroImageLeft from './assets/event-held-in-musume.jpg';
import heroImageRight from './assets/exhibition-event.jpg';
import contentImageLeft from './assets/girls-at-musume.jpg';
import contentImageRight from './assets/people-enjoying-art-exhibition.jpg';
import footerImage from './assets/top-view-cafe.jpg';

function createEventsPage() {
    const container = document.getElementById('content');
    const newDiv = document.createElement('div');
    newDiv.classList.add('event-container');
    
    newDiv.innerHTML = `<div class="main-container">
                        <nav class="navbar">
                        <div class="menu-wrapper">
                        <div class="menu">
                        <a class="home-btn white" href="">Home</a>
                        <a class="menu-btn white" href="">Menu</a>
                        </div></div></nav>
                        <div class="contain-wrapper foods">
                        <img class="hero-image left" src="${heroImageLeft}">
                        <h4 class="heading4">WOW<br>&nbsp;CAFE'S<br>&nbsp;&nbsp;EVENTS</h4>
                        <img class="hero-image right" src="${heroImageRight}"></div>
                        <p>The Antichrist will be the infernal prince again for the third and last time... so many 
                        evils shall be committed by the means of Satan, the infernal Prince, that almost the entire 
                        world shall be found undone and desolate. Before these events happen, many rare birds will cry in 
                        the air, 'Now! Now!' and sometime later will vanish.</p>
                        <div class="contain-wrapper foods">
                        <div class="image-wrapper">
                        <img class="hero-image right" src="${contentImageLeft}">
                        <h5 class="heading5 about">ABOUT<br>EVENTS</h5>
                        <p class="about">A library is a collection of materials, books or media that are accessible 
                        for use and not just for display purposes. A library provides physical (hard copies) or digital 
                        access (soft copies) materials, and may be a physical location or a virtual space, or both. A 
                        library's collection can include printed materials and others.
                        </p></div>
                        <img class="content-image right" src="${contentImageRight}"></div>
                        <div class="info-wrapper">
                        <h4 class="info">Featured<br>Artist</h4>
                        <div class="divider top">
                        <h5>JAMES MURRY</h6>
                        <h6>R & B</h6>
                        <h6 class="is-thin">30 SONGS</h6>
                        </div>
                        <div class="divider">
                        <h5>LIL TEACA</h5>
                        <h6>TRAP</h6>
                        <h6 class="is-thin">10 SONGS</h6></div>
                        <div class="divider">
                        <h5>BLACK BLUE</h5>
                        <h6>COUNTRY</h6>
                        <h6 class="is-thin">20 SONGS</h6></div>
                        <div class="divider">
                        <h5>TENZIN TREPZ</h5>
                        <h6>HIP HOP</h6>
                        <h6 class="is-thin">5 SONGS</h6></div>
                        <div class="divider">
                        <h5>GOZILLLA</h5>
                        <h6>ROCK & ROLL</h6>
                        <h6 class="is-thin">7 SONGS</h6></div>
                        <div class="divider">
                        <h5>JUSTIN POLLOCK</h5>
                        <h6>POP</h6>
                        <h6 class="is-thin">13 SONGS</h6></div>
                        <div class="divider"><h5>KUNSNAG</h5>
                        <h6>R & B</h6>
                        <h6 class="is-thin">20 SONGS</h6></div>
                        <div class="divider"><h5>BIT ROCK</h5>
                        <h6>ROCK & ROLL</h6>
                        <h6 class="is-thin">7 SONGS</h6></div>
                        <div class="divider"><h5>BILLIE</h5>
                        <h6>POP</h6>
                        <h6 class="is-thin">40 SONGS</h6></div>
                        </div>
                        </div>
                        <footer id="footer" class="footer black">
                        <div class="contain-wrapper">
                        <h1 class="heading1 event">WOW <br>&nbsp;CAFE</h1>
                        <img id="video" src="${footerImage}"></div>
                        <div class="social-media">
                        <a class="text-link white" href="https://careers.swiggy.com/#/" target="_blank">CAREER</a>
                        <a class="text-link white" href="https://www.facebook.com/login.php" target="_blank">FACEBOOK</a>
                        <a class="text-link white" href="https://www.instagram.com/accounts/login/" target="_blank">INSTAGRAM</a>
                        <a class="text-link white" href="https://www.swiggy.com/privacy-policy" target="_blank">PRIVATE POLICY</a>
                        <a class="text-link white" href="https://www.amazon.in/books/s?k=books" target="_blank">BOOKS</a>
                        </div>
                        </footer>
                        `;

    container.appendChild(newDiv);

}

export default createEventsPage;