import heroImageLeft from './assets/artist-adjusting-sound.jpg';
import heroImageRight from './assets/girl-singing-song.jpg';
import contentImageLeft from './assets/girl-singing-on-the-chair.jpg';
import contentImageRight from './assets/artist-singing-on-the-mic.jpg';
import footerImage from './assets/top-view-cafe.jpg';

function createMusicPage() {
    const container = document.getElementById('content');
    const newDiv = document.createElement('div');
    newDiv.classList.add('music-container');
    newDiv.innerHTML = `<div class="main-container">
                         <nav class="navbar">
                        <div class="menu-wrapper">
                        <div class="menu">
                        <a class="menu-home white" href="">Home</a>
                        <a class="menu-btn white" href="">Menu</a>
                        </div></div></nav>
                        <div class="contain-wrapper foods">
                        <img class="hero-image left" src="${heroImageLeft}">
                        <h4 class="heading4">WOW<br>&nbsp;CAFE'S<br>&nbsp;&nbsp;MUSIC<br>&nbsp;&nbsp;&nbsp;& STUDIO</h4>
                        <img class="hero-image right" src="${heroImageRight}"></div>
                        <p>LIFE, HE REAlIZE, WAS MUCH LIKE A SONG. IN THE BEGINNING THERE IS MYSTERY, IN THE END THERE IS CONFIRMATION, 
                        BUT IT’S IN THE MIDDLE WHERE ALL THE EMOTION RESIDES TO MAKE THE WHOLE THING WORTHWHILE. </p>
                        <div class="contain-wrapper foods">
                        <div class="image-wrapper">
                        <img class="hero-image right" src="${contentImageLeft}">
                        <h5 class="heading5 about">ABOUT<br>STUDIO</h5>
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
                        <footer id="footer" class="footer">
                        <div class="contain-wrapper">
                        <h1 class="heading1 music">WOW <br>&nbsp;CAFE</h1>
                        <img id="video" src="${footerImage}"></div>
                        <div class="social-media">
                        <a class="text-link white" href="">CAREER</a>
                        <a class="text-link white" href="">FACEBOOK</a>
                        <a class="text-link white" href="">INSTAGRAM</a>
                        <a class="text-link white" href="">PRIVATE POLICY</a>
                        <a class="text-link white" href="">BOOKS</a>
                        </div>
                        </footer>
                        `;
    container.appendChild(newDiv);
}

export default createMusicPage;