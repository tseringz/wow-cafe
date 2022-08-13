import footerImage from './assets/top-view-cafe.jpg';


function createContactPage() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('contact-container');
    newDiv.innerHTML = `<div class="main-container">
                        <nav class="navbar">
                        <div class="menu-wrapper">
                        <div class="menu">
                        <a class="home-btn white" href="">Home</a>
                        <a class="menu-btn white" href="">Menu</a>
                        </div></div></nav>
                        <address>
                        <h4 class="info-visit">Visit us </h4>
                        <h6 class="contact-info">WOW CAFE, SAHASTRADHARA RD, ADJACENT<br>
                        TO USHA COLONY, ABOVE SBI BANK, KULHAN<br>
                        DEHRADUN UTTARAKHAND 248013</h6>
                        </address>
                        <div id="googleMap" style="width:100%;height:480px;">
                        <p>CONTACT: 9311557548</p>
                        <p>EMAIL: wowcafe@gmail.com</p>
                        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=18uk4FyWjNZwHn0tNFpEmgfCkDI9iRuw&ehbc=2E312F" width="100%" height="480"></iframe>
                        </div>
                        </div>
                        <footer id="footer" class="footer black">
                        <div class="contain-wrapper">
                        <h1 class="heading1 event">WOW <br>&nbsp;CAFE</h1>
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

    return newDiv;
}

export default createContactPage;