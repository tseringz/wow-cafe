import heroImageLeft from './assets/inside-view-of-cafe.jpg';
import heroImageRight from './assets/people-in-cafe.jpg';
import contentImageLeft from './assets/women-reading-books-in-cafe.jpg';
import contentImageRight from './assets/coffee-at-coffee-table.jpg';
import footerImage from './assets/top-view-cafe.jpg';

function createLibraryPage() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('library-container');
    
    newDiv.innerHTML = `<div class="main-container">
                         <nav class="navbar">
                        <div class="menu-wrapper">
                        <div class="menu">
                        <a class="menu-btn white" href="">Home</a>
                        <a class="menu-btn white" href="">Menu</a>
                        </div></div></nav>
                        <div class="contain-wrapper foods">
                        <img class="hero-image left" src="${heroImageLeft}">
                        <h4 class="heading4">WOW<br>&nbsp;CAFE'S<br>&nbsp;&nbsp;LIBRARY<br></h4>
                        <img class="hero-image right" src="${heroImageRight}"></div>
                        <p>Food is a huge part of every culture. Aside from needing it to survive, the time spent enjoying meals 
                        brings people together to share their lives and stories. From gathering around camp fires to formal dinners, 
                        food brings people together around the world.</p>
                        <div class="contain-wrapper foods">
                        <div class="image-wrapper">
                        <img class="hero-image right" src="${contentImageLeft}">
                        <h5 class="heading5 about">ABOUT<br>LIBRARY</h5>
                        <p class="about">WOw cafe provides library facilities where customer can access to more then 10000 books 
                        from fictions to novels. we provide both physical and digital access to materials. customer can borrow 
                        books and use internet facilities as same as normal library. we also provide separate room for readings. 
                        those who are college students can use our facilities for free.</p></div>
                        <img class="content-image right" src="${contentImageRight}"></div>
                        <div class="info-wrapper">
                        <h4 class="info">Latest<br>Books</h4>
                        <div class="divider top">
                        <h5>NON FICTION</h6>
                        <h6>SILENT SPSRING</h6>
                        <h6 class="is-thin">420</h6>
                        </div>
                        <div class="divider">
                        <h5>NON FICTION</h5>
                        <h6>IN CLOUD BLOOD</h6>
                        <h6 class="is-thin">350</h6></div>
                        <div class="divider">
                        <h5>FICTION</h5>
                        <h6>BELOVED</h6>
                        <h6 class="is-thin">300</h6></div>
                        <div class="divider">
                        <h5>FICTION</h5>
                        <h6>THE KITE RUNNER</h6>
                        <h6 class="is-thin">400</h6></div>
                        <div class="divider">
                        <h5>FICTION</h5>
                        <h6>DUNE</h6>
                        <h6 class="is-thin">1200</h6></div>
                        <div class="divider">
                        <h5>BIOGRAPHY</h5>
                        <h6>STEVE JOBS</h6>
                        <h6 class="is-thin">120</h6></div>
                        <div class="divider"><h5>NOVEL</h5>
                        <h6>THE ALCHEMIST</h6>
                        <h6 class="is-thin">500</h6></div>
                        <div class="divider"><h5>NOVEL</h5>
                        <h6>A PASSAGE TO INDIA</h6>
                        <h6 class="is-thin">300</h6></div>
                        <div class="divider"><h5>BIOGRAPHY</h5>
                        <h6>WINGS OF FIRE</h6>
                        <h6 class="is-thin">400</h6></div>
                        </div>
                        </div>
                        <footer id="footer" class="footer">
                        <div class="contain-wrapper">
                        <h1 class="heading1 library">WOW <br>&nbsp;CAFE</h1>
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
    return newDiv;

}

export default createLibraryPage;


