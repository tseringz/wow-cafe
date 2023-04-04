import heroImageLeft from './assets/food-on-the-table.jpg';
import heroImageRight from './assets/coffee-pouring-from-judge.jpg';
import contentImageLeft from './assets/pizza-coffee-cake.jpg';
import contentImageRight from './assets/sand-witch.jpg';
import footerImage from './assets/top-view-cafe.jpg';


function createFoodPage() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('food-container');
    newDiv.innerHTML = `<div class="main-container">
                        <div class="contain-wrapper foods">
                        <img class="hero-image left" src="${heroImageLeft}">
                        <h4 class="heading4">WOW<br>&nbsp;CAFE'S<br>&nbsp;&nbsp;FOOD<br>&nbsp;&nbsp;&nbsp;& DRINKS</h4>
                        <img class="hero-image right" src="${heroImageRight}"></div>
                        <p>Food is a huge part of every culture. Aside from needing it to survive, the time spent enjoying meals 
                        brings people together to share their lives and stories. From gathering around camp fires to formal dinners, 
                        food brings people together around the world.</p>
                        <div class="contain-wrapper foods">
                        <div class="image-wrapper">
                        <img class="hero-image right" src="${contentImageLeft}">
                        <h5 class="heading5 about">ABOUT<br>CAFE</h5>
                        <p class="about">Wow cafe is located at Sahastradhara road near hill station apartment. The cafe is established in 
                        June 2021 with a purpose of promoting art and culture through gathering artist and promoting different 
                        types of art events. It has music studio where artist can records their music with high quality</p></div>
                        <img class="content-image right" src="${contentImageRight}"></div>
                        <div class="info-wrapper">
                        <h4 class="info">Food &<br>Drinks</h4>
                        <div class="divider top">
                        <h5>DRINKS</h6>
                        <h6>CAPICCUINO</h6>
                        <h6 class="is-thin">109</h6>
                        </div>
                        <div class="divider">
                        <h5>DRINKS</h5>
                        <h6>EXPRESSO</h6>
                        <h6 class="is-thin">201</h6></div>
                        <div class="divider">
                        <h5>DRINKS</h5>
                        <h6>ICE CAFFE LATTE</h6>
                        <h6 class="is-thin">120</h6></div>
                        <div class="divider">
                        <h5>DRINKS</h5>
                        <h6>ICE CAFFE LATTE</h6>
                        <h6 class="is-thin">120</h6></div>
                        <div class="divider">
                        <h5>FOOD</h5>
                        <h6>FRENCH FRIES</h6>
                        <h6 class="is-thin">150</h6></div>
                        <div class="divider">
                        <h5>DRINKS</h5>
                        <h6>HOT COFFEE</h6>
                        <h6 class="is-thin">109</h6></div>
                        <div class="divider"><h5>FOOD</h5>
                        <h6>CHICKEN BREAD</h6>
                        <h6 class="is-thin">250</h6></div>
                        <div class="divider"><h5>FOOD</h5>
                        <h6>CHICKEN BREAD</h6>
                        <h6 class="is-thin">250</h6></div>
                        <div class="divider"><h5>DRINKS</h5>
                        <h6>AMERICANO</h6>
                        <h6 class="is-thin">230</h6></div>
                        </div>
                        </div>
                        <footer id="footer" class="footer">
                        <div class="contain-wrapper">
                        <h1 class="heading1 food">WOW <br>&nbsp;CAFE</h1>
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

export default createFoodPage;