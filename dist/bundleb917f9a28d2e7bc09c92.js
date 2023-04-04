/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/anime.js":
/*!**********************!*\
  !*** ./src/anime.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headingAnimation": () => (/* binding */ headingAnimation),
/* harmony export */   "navbarAnimation": () => (/* binding */ navbarAnimation),
/* harmony export */   "navbarCloseAnimation": () => (/* binding */ navbarCloseAnimation)
/* harmony export */ });
function headingAnimation() {
  anime.timeline({
    loop: false
  }).add({
    targets: '.heading1 .word',
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 800,
    delay: function delay(el, i) {
      return 800 * i;
    }
  }).add({
    targets: '.heading1',
    opacity: 100,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
}

;

function navbarAnimation() {
  // navbar scroll down animation
  anime({
    targets: '.navbar-nav ',
    translateY: '100%',
    easing: 'easeInOutExpo',
    duration: 2000
  }); // humberger menu animation

  anime({
    targets: '.icon-top',
    translateY: 4,
    rotate: 45,
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 500
  });
  anime({
    targets: '.icon-bottom',
    translateY: -4,
    rotate: -45,
    easing: 'easeInOutQuad',
    duration: 2000,
    delay: 500
  }); // Nav link animation 

  var animation = anime({
    targets: '.list-item',
    translateY: 40,
    duration: 2000,
    delay: function delay(el, i) {
      return i * 300;
    },
    direction: 'alternate',
    loop: false,
    easing: 'easeInOutSine'
  }); //menu heading animation

  anime({
    targets: '.menu-heading',
    translateX: '-100%',
    easing: 'easeInOutExpo',
    duration: 2000
  });
}

;

function navbarCloseAnimation() {
  // navbar scroll down animation
  anime({
    targets: '.navbar-nav',
    translateY: '-100%',
    easing: 'easeInOutExpo',
    duration: 2000
  }); // humburger menu animation

  anime({
    targets: '.icon-top',
    translateY: 0,
    rotate: 0,
    easing: 'easeInOutQuad',
    duration: 2000,
    delay: 500
  });
  anime({
    targets: '.icon-bottom',
    translateY: 0,
    rotate: 0,
    easing: 'easeInOutQuad',
    duration: 2000,
    delay: 500
  }); // Nav link animation 

  var animation = anime({
    targets: '.list-item',
    translateY: 0,
    duration: 2000,
    delay: function delay(el, i) {
      return i * 300;
    },
    direction: 'alternate',
    loop: false,
    easing: 'easeInOutSine'
  }); //menu heading animation

  anime({
    targets: '.menu-heading',
    translateX: '0%',
    easing: 'easeInOutExpo',
    duration: 2000
  });
}



/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_top_view_cafe_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/top-view-cafe.jpg */ "./src/assets/top-view-cafe.jpg");


function createContactPage() {
  var newDiv = document.createElement('div');
  newDiv.classList.add('contact-container');
  newDiv.innerHTML = "<div class=\"main-container\">\n                        <nav class=\"navbar\">\n                        <div class=\"menu-wrapper\">\n                        <div class=\"menu\">\n                        <a class=\"home-btn white\" href=\"\">Home</a>\n                        <a class=\"menu-btn white\" href=\"\">Menu</a>\n                        </div></div></nav>\n                        <h4 class=\"info-visit\">Visit us </h4>\n                        <address>\n                        <h6 class=\"contact-info\">WOW CAFE, SAHASTRADHARA RD, ADJACENT<br>\n                        TO USHA COLONY, ABOVE SBI BANK, KULHAN<br>\n                        DEHRADUN UTTARAKHAND 248013</h6>\n                        </address>\n                        <div id=\"googleMap\" style=\"width:100%;height:480px;\">\n                        <p>CONTACT: 9311557548</p>\n                        <p>EMAIL: wowcafe@gmail.com</p>\n                        <iframe src=\"https://www.google.com/maps/d/u/0/embed?mid=18uk4FyWjNZwHn0tNFpEmgfCkDI9iRuw&ehbc=2E312F\" width=\"100%\" height=\"480\"></iframe>\n                        </div>\n                        </div>\n                        <footer id=\"footer\" class=\"footer black\">\n                        <div class=\"contain-wrapper\">\n                        <h1 class=\"heading1 event\">WOW <br>&nbsp;CAFE</h1>\n                        <img id=\"video\" src=\"".concat(_assets_top_view_cafe_jpg__WEBPACK_IMPORTED_MODULE_0__, "\"></div>\n                        <div class=\"social-media\">\n                        <a class=\"text-link white\" href=\"https://careers.swiggy.com/#/\" target=\"_blank\">CAREER</a>\n                        <a class=\"text-link white\" href=\"https://www.facebook.com/login.php\" target=\"_blank\">FACEBOOK</a>\n                        <a class=\"text-link white\" href=\"https://www.instagram.com/accounts/login/\" target=\"_blank\">INSTAGRAM</a>\n                        <a class=\"text-link white\" href=\"https://www.swiggy.com/privacy-policy\" target=\"_blank\">PRIVATE POLICY</a>\n                        <a class=\"text-link white\" href=\"https://www.amazon.in/books/s?k=books\" target=\"_blank\">BOOKS</a>\n                        </div>\n                        </footer>\n                        ");
  return newDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_event_held_in_musume_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/event-held-in-musume.jpg */ "./src/assets/event-held-in-musume.jpg");
/* harmony import */ var _assets_exhibition_event_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/exhibition-event.jpg */ "./src/assets/exhibition-event.jpg");
/* harmony import */ var _assets_girls_at_musume_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/girls-at-musume.jpg */ "./src/assets/girls-at-musume.jpg");
/* harmony import */ var _assets_people_enjoying_art_exhibition_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/people-enjoying-art-exhibition.jpg */ "./src/assets/people-enjoying-art-exhibition.jpg");
/* harmony import */ var _assets_top_view_cafe_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/top-view-cafe.jpg */ "./src/assets/top-view-cafe.jpg");






function createEventsPage() {
  var container = document.getElementById('content');
  var newDiv = document.createElement('div');
  newDiv.classList.add('event-container');
  newDiv.innerHTML = "<div class=\"main-container\">\n                        <nav class=\"navbar\">\n                        <div class=\"menu-wrapper\">\n                        <div class=\"menu\">\n                        <a class=\"home-btn white\" href=\"\">Home</a>\n                        <a class=\"menu-btn white\" href=\"\">Menu</a>\n                        </div></div></nav>\n                        <div class=\"contain-wrapper foods\">\n                        <img class=\"hero-image left\" src=\"".concat(_assets_event_held_in_musume_jpg__WEBPACK_IMPORTED_MODULE_0__, "\">\n                        <h4 class=\"heading4\">WOW<br>&nbsp;CAFE'S<br>&nbsp;&nbsp;EVENTS</h4>\n                        <img class=\"hero-image right\" src=\"").concat(_assets_exhibition_event_jpg__WEBPACK_IMPORTED_MODULE_1__, "\"></div>\n                        <p>The Antichrist will be the infernal prince again for the third and last time... so many \n                        evils shall be committed by the means of Satan, the infernal Prince, that almost the entire \n                        world shall be found undone and desolate. Before these events happen, many rare birds will cry in \n                        the air, 'Now! Now!' and sometime later will vanish.</p>\n                        <div class=\"contain-wrapper foods\">\n                        <div class=\"image-wrapper\">\n                        <img class=\"hero-image right\" src=\"").concat(_assets_girls_at_musume_jpg__WEBPACK_IMPORTED_MODULE_2__, "\">\n                        <h5 class=\"heading5 about\">ABOUT<br>EVENTS</h5>\n                        <p class=\"about\">A library is a collection of materials, books or media that are accessible \n                        for use and not just for display purposes. A library provides physical (hard copies) or digital \n                        access (soft copies) materials, and may be a physical location or a virtual space, or both. A \n                        library's collection can include printed materials and others.\n                        </p></div>\n                        <img class=\"content-image right\" src=\"").concat(_assets_people_enjoying_art_exhibition_jpg__WEBPACK_IMPORTED_MODULE_3__, "\"></div>\n                        <div class=\"info-wrapper\">\n                        <h4 class=\"info\">Featured<br>Artist</h4>\n                        <div class=\"divider top\">\n                        <h5>JAMES MURRY</h6>\n                        <h6>R & B</h6>\n                        <h6 class=\"is-thin\">30 SONGS</h6>\n                        </div>\n                        <div class=\"divider\">\n                        <h5>LIL TEACA</h5>\n                        <h6>TRAP</h6>\n                        <h6 class=\"is-thin\">10 SONGS</h6></div>\n                        <div class=\"divider\">\n                        <h5>BLACK BLUE</h5>\n                        <h6>COUNTRY</h6>\n                        <h6 class=\"is-thin\">20 SONGS</h6></div>\n                        <div class=\"divider\">\n                        <h5>TENZIN TREPZ</h5>\n                        <h6>HIP HOP</h6>\n                        <h6 class=\"is-thin\">5 SONGS</h6></div>\n                        <div class=\"divider\">\n                        <h5>GOZILLLA</h5>\n                        <h6>ROCK & ROLL</h6>\n                        <h6 class=\"is-thin\">7 SONGS</h6></div>\n                        <div class=\"divider\">\n                        <h5>JUSTIN POLLOCK</h5>\n                        <h6>POP</h6>\n                        <h6 class=\"is-thin\">13 SONGS</h6></div>\n                        <div class=\"divider\"><h5>KUNSNAG</h5>\n                        <h6>R & B</h6>\n                        <h6 class=\"is-thin\">20 SONGS</h6></div>\n                        <div class=\"divider\"><h5>BIT ROCK</h5>\n                        <h6>ROCK & ROLL</h6>\n                        <h6 class=\"is-thin\">7 SONGS</h6></div>\n                        <div class=\"divider\"><h5>BILLIE</h5>\n                        <h6>POP</h6>\n                        <h6 class=\"is-thin\">40 SONGS</h6></div>\n                        </div>\n                        </div>\n                        <footer id=\"footer\" class=\"footer black\">\n                        <div class=\"contain-wrapper\">\n                        <h1 class=\"heading1 event\">WOW <br>&nbsp;CAFE</h1>\n                        <img id=\"video\" src=\"").concat(_assets_top_view_cafe_jpg__WEBPACK_IMPORTED_MODULE_4__, "\"></div>\n                        <div class=\"social-media\">\n                        <a class=\"text-link white\" href=\"https://careers.swiggy.com/#/\" target=\"_blank\">CAREER</a>\n                        <a class=\"text-link white\" href=\"https://www.facebook.com/login.php\" target=\"_blank\">FACEBOOK</a>\n                        <a class=\"text-link white\" href=\"https://www.instagram.com/accounts/login/\" target=\"_blank\">INSTAGRAM</a>\n                        <a class=\"text-link white\" href=\"https://www.swiggy.com/privacy-policy\" target=\"_blank\">PRIVATE POLICY</a>\n                        <a class=\"text-link white\" href=\"https://www.amazon.in/books/s?k=books\" target=\"_blank\">BOOKS</a>\n                        </div>\n                        </footer>\n                        ");
  container.appendChild(newDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEventsPage);

/***/ }),

/***/ "./src/foods.js":
/*!**********************!*\
  !*** ./src/foods.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_food_on_the_table_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/food-on-the-table.jpg */ "./src/assets/food-on-the-table.jpg");
/* harmony import */ var _assets_coffee_pouring_from_judge_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/coffee-pouring-from-judge.jpg */ "./src/assets/coffee-pouring-from-judge.jpg");
/* harmony import */ var _assets_pizza_coffee_cake_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pizza-coffee-cake.jpg */ "./src/assets/pizza-coffee-cake.jpg");
/* harmony import */ var _assets_sand_witch_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/sand-witch.jpg */ "./src/assets/sand-witch.jpg");
/* harmony import */ var _assets_top_view_cafe_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/top-view-cafe.jpg */ "./src/assets/top-view-cafe.jpg");
/* harmony import */ var _anime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./anime */ "./src/anime.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");








function createFoodPage() {
  var newDiv = document.createElement('div');
  newDiv.classList.add('food-container');
  newDiv.innerHTML = "<div class=\"main-container\">\n                        <div class=\"contain-wrapper foods\">\n                        <img class=\"hero-image left\" src=\"".concat(_assets_food_on_the_table_jpg__WEBPACK_IMPORTED_MODULE_0__, "\">\n                        <h4 class=\"heading4\">WOW<br>&nbsp;CAFE'S<br>&nbsp;&nbsp;FOOD<br>&nbsp;&nbsp;&nbsp;& DRINKS</h4>\n                        <img class=\"hero-image right\" src=\"").concat(_assets_coffee_pouring_from_judge_jpg__WEBPACK_IMPORTED_MODULE_1__, "\"></div>\n                        <p>Food is a huge part of every culture. Aside from needing it to survive, the time spent enjoying meals \n                        brings people together to share their lives and stories. From gathering around camp fires to formal dinners, \n                        food brings people together around the world.</p>\n                        <div class=\"contain-wrapper foods\">\n                        <div class=\"image-wrapper\">\n                        <img class=\"hero-image right\" src=\"").concat(_assets_pizza_coffee_cake_jpg__WEBPACK_IMPORTED_MODULE_2__, "\">\n                        <h5 class=\"heading5 about\">ABOUT<br>CAFE</h5>\n                        <p class=\"about\">Wow cafe is located at Sahastradhara road near hill station apartment. The cafe is established in \n                        June 2021 with a purpose of promoting art and culture through gathering artist and promoting different \n                        types of art events. It has music studio where artist can records their music with high quality</p></div>\n                        <img class=\"content-image right\" src=\"").concat(_assets_sand_witch_jpg__WEBPACK_IMPORTED_MODULE_3__, "\"></div>\n                        <div class=\"info-wrapper\">\n                        <h4 class=\"info\">Food &<br>Drinks</h4>\n                        <div class=\"divider top\">\n                        <h5>DRINKS</h6>\n                        <h6>CAPICCUINO</h6>\n                        <h6 class=\"is-thin\">109</h6>\n                        </div>\n                        <div class=\"divider\">\n                        <h5>DRINKS</h5>\n                        <h6>EXPRESSO</h6>\n                        <h6 class=\"is-thin\">201</h6></div>\n                        <div class=\"divider\">\n                        <h5>DRINKS</h5>\n                        <h6>ICE CAFFE LATTE</h6>\n                        <h6 class=\"is-thin\">120</h6></div>\n                        <div class=\"divider\">\n                        <h5>DRINKS</h5>\n                        <h6>ICE CAFFE LATTE</h6>\n                        <h6 class=\"is-thin\">120</h6></div>\n                        <div class=\"divider\">\n                        <h5>FOOD</h5>\n                        <h6>FRENCH FRIES</h6>\n                        <h6 class=\"is-thin\">150</h6></div>\n                        <div class=\"divider\">\n                        <h5>DRINKS</h5>\n                        <h6>HOT COFFEE</h6>\n                        <h6 class=\"is-thin\">109</h6></div>\n                        <div class=\"divider\"><h5>FOOD</h5>\n                        <h6>CHICKEN BREAD</h6>\n                        <h6 class=\"is-thin\">250</h6></div>\n                        <div class=\"divider\"><h5>FOOD</h5>\n                        <h6>CHICKEN BREAD</h6>\n                        <h6 class=\"is-thin\">250</h6></div>\n                        <div class=\"divider\"><h5>DRINKS</h5>\n                        <h6>AMERICANO</h6>\n                        <h6 class=\"is-thin\">230</h6></div>\n                        </div>\n                        </div>\n                        <footer id=\"footer\" class=\"footer\">\n                        <div class=\"contain-wrapper\">\n                        <h1 class=\"heading1 food\">WOW <br>&nbsp;CAFE</h1>\n                        <img id=\"video\" src=\"").concat(_assets_top_view_cafe_jpg__WEBPACK_IMPORTED_MODULE_4__, "\"></div>\n                        <div class=\"social-media\">\n                        <a class=\"text-link white\" href=\"https://careers.swiggy.com/#/\" target=\"_blank\">CAREER</a>\n                        <a class=\"text-link white\" href=\"https://www.facebook.com/login.php\" target=\"_blank\">FACEBOOK</a>\n                        <a class=\"text-link white\" href=\"https://www.instagram.com/accounts/login/\" target=\"_blank\">INSTAGRAM</a>\n                        <a class=\"text-link white\" href=\"https://www.swiggy.com/privacy-policy\" target=\"_blank\">PRIVATE POLICY</a>\n                        <a class=\"text-link white\" href=\"https://www.amazon.in/books/s?k=books\" target=\"_blank\">BOOKS</a>\n                        </div>\n                        </footer>\n                        ");
  return newDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFoodPage);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_students_in_cafe_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/students-in-cafe.mp4 */ "./src/assets/students-in-cafe.mp4");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");



function createHomePage() {
  var container = document.getElementById('content');
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'home-wrapper');
  newDiv.innerHTML = "<nav class=\"navbar-home\">\n                        <div class=\"menu-wrapper\">\n                        <div class=\"menu\">\n                        <a class=\"menu-home\">Menu</a>\n                        <a href=\"https://form.jotform.com/222239259686467\" target=\"_blank\">Reservation</a>\n                        <a class=\"contact\">Contact</a>\n                        </div></div></nav>\n                        <div class=\"contain-wrapper home\">\n                        <h1 class=\"heading1 home\"><span class=\"word\">WOW</span><br>&nbsp;<span class=\"word\">CAFE</span></h1>\n                        <video id=\"video\" width=\"200\" height=\"400\" autoplay loop=\"true\">\n                        <source src=\"".concat(_assets_students_in_cafe_mp4__WEBPACK_IMPORTED_MODULE_0__, "\" type=\"video/mp4\"></video></div>\n                        <div class=\"social-media\">\n                        <a class=\"text-link\" href=\"https://careers.swiggy.com/#/\" target=\"_blank\">CAREER</a>\n                        <a class=\"text-link\" href=\"https://www.facebook.com/login.php\" target=\"_blank\">FACEBOOK</a>\n                        <a class=\"text-link\" href=\"https://www.instagram.com/accounts/login/\" target=\"_blank\">INSTAGRAM</a>\n                        <a class=\"text-link\" href=\"https://www.swiggy.com/privacy-policy\" target=\"_blank\">PRIVATE POLICY</a>\n                        <a class=\"text-link\" href=\"https://www.amazon.in/books/s?k=books\" target=\"_blank\">BOOKS</a>\n                        </div>\n                        ");
  container.appendChild(newDiv);
  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);

/***/ }),

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_inside_view_of_cafe_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/inside-view-of-cafe.jpg */ "./src/assets/inside-view-of-cafe.jpg");
/* harmony import */ var _assets_people_in_cafe_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/people-in-cafe.jpg */ "./src/assets/people-in-cafe.jpg");
/* harmony import */ var _assets_women_reading_books_in_cafe_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/women-reading-books-in-cafe.jpg */ "./src/assets/women-reading-books-in-cafe.jpg");
/* harmony import */ var _assets_coffee_at_coffee_table_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/coffee-at-coffee-table.jpg */ "./src/assets/coffee-at-coffee-table.jpg");
/* harmony import */ var _assets_top_view_cafe_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/top-view-cafe.jpg */ "./src/assets/top-view-cafe.jpg");






function createLibraryPage() {
  var newDiv = document.createElement('div');
  newDiv.classList.add('library-container');
  newDiv.innerHTML = "<div class=\"main-container\">\n                         <nav class=\"navbar\">\n                        <div class=\"menu-wrapper\">\n                        <div class=\"menu\">\n                        <a class=\"menu-btn white\" href=\"\">Home</a>\n                        <a class=\"menu-btn white\" href=\"\">Menu</a>\n                        </div></div></nav>\n                        <div class=\"contain-wrapper foods\">\n                        <img class=\"hero-image left\" src=\"".concat(_assets_inside_view_of_cafe_jpg__WEBPACK_IMPORTED_MODULE_0__, "\">\n                        <h4 class=\"heading4\">WOW<br>&nbsp;CAFE'S<br>&nbsp;&nbsp;LIBRARY<br></h4>\n                        <img class=\"hero-image right\" src=\"").concat(_assets_people_in_cafe_jpg__WEBPACK_IMPORTED_MODULE_1__, "\"></div>\n                        <p>Food is a huge part of every culture. Aside from needing it to survive, the time spent enjoying meals \n                        brings people together to share their lives and stories. From gathering around camp fires to formal dinners, \n                        food brings people together around the world.</p>\n                        <div class=\"contain-wrapper foods\">\n                        <div class=\"image-wrapper\">\n                        <img class=\"hero-image right\" src=\"").concat(_assets_women_reading_books_in_cafe_jpg__WEBPACK_IMPORTED_MODULE_2__, "\">\n                        <h5 class=\"heading5 about\">ABOUT<br>LIBRARY</h5>\n                        <p class=\"about\">WOw cafe provides library facilities where customer can access to more then 10000 books \n                        from fictions to novels. we provide both physical and digital access to materials. customer can borrow \n                        books and use internet facilities as same as normal library. we also provide separate room for readings. \n                        those who are college students can use our facilities for free.</p></div>\n                        <img class=\"content-image right\" src=\"").concat(_assets_coffee_at_coffee_table_jpg__WEBPACK_IMPORTED_MODULE_3__, "\"></div>\n                        <div class=\"info-wrapper\">\n                        <h4 class=\"info\">Latest<br>Books</h4>\n                        <div class=\"divider top\">\n                        <h5>NON FICTION</h6>\n                        <h6>SILENT SPSRING</h6>\n                        <h6 class=\"is-thin\">420</h6>\n                        </div>\n                        <div class=\"divider\">\n                        <h5>NON FICTION</h5>\n                        <h6>IN CLOUD BLOOD</h6>\n                        <h6 class=\"is-thin\">350</h6></div>\n                        <div class=\"divider\">\n                        <h5>FICTION</h5>\n                        <h6>BELOVED</h6>\n                        <h6 class=\"is-thin\">300</h6></div>\n                        <div class=\"divider\">\n                        <h5>FICTION</h5>\n                        <h6>THE KITE RUNNER</h6>\n                        <h6 class=\"is-thin\">400</h6></div>\n                        <div class=\"divider\">\n                        <h5>FICTION</h5>\n                        <h6>DUNE</h6>\n                        <h6 class=\"is-thin\">1200</h6></div>\n                        <div class=\"divider\">\n                        <h5>BIOGRAPHY</h5>\n                        <h6>STEVE JOBS</h6>\n                        <h6 class=\"is-thin\">120</h6></div>\n                        <div class=\"divider\"><h5>NOVEL</h5>\n                        <h6>THE ALCHEMIST</h6>\n                        <h6 class=\"is-thin\">500</h6></div>\n                        <div class=\"divider\"><h5>NOVEL</h5>\n                        <h6>A PASSAGE TO INDIA</h6>\n                        <h6 class=\"is-thin\">300</h6></div>\n                        <div class=\"divider\"><h5>BIOGRAPHY</h5>\n                        <h6>WINGS OF FIRE</h6>\n                        <h6 class=\"is-thin\">400</h6></div>\n                        </div>\n                        </div>\n                        <footer id=\"footer\" class=\"footer\">\n                        <div class=\"contain-wrapper\">\n                        <h1 class=\"heading1 library\">WOW <br>&nbsp;CAFE</h1>\n                        <img id=\"video\" src=\"").concat(_assets_top_view_cafe_jpg__WEBPACK_IMPORTED_MODULE_4__, "\"></div>\n                        <div class=\"social-media\">\n                        <a class=\"text-link white\" href=\"https://careers.swiggy.com/#/\" target=\"_blank\">CAREER</a>\n                        <a class=\"text-link white\" href=\"https://www.facebook.com/login.php\" target=\"_blank\">FACEBOOK</a>\n                        <a class=\"text-link white\" href=\"https://www.instagram.com/accounts/login/\" target=\"_blank\">INSTAGRAM</a>\n                        <a class=\"text-link white\" href=\"https://www.swiggy.com/privacy-policy\" target=\"_blank\">PRIVATE POLICY</a>\n                        <a class=\"text-link white\" href=\"https://www.amazon.in/books/s?k=books\" target=\"_blank\">BOOKS</a>\n                        </div>\n                        </footer>\n                        ");
  return newDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLibraryPage);

/***/ }),

/***/ "./src/music.js":
/*!**********************!*\
  !*** ./src/music.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_artist_adjusting_sound_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/artist-adjusting-sound.jpg */ "./src/assets/artist-adjusting-sound.jpg");
/* harmony import */ var _assets_girl_singing_song_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/girl-singing-song.jpg */ "./src/assets/girl-singing-song.jpg");
/* harmony import */ var _assets_girl_singing_on_the_chair_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/girl-singing-on-the-chair.jpg */ "./src/assets/girl-singing-on-the-chair.jpg");
/* harmony import */ var _assets_artist_singing_on_the_mic_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/artist-singing-on-the-mic.jpg */ "./src/assets/artist-singing-on-the-mic.jpg");
/* harmony import */ var _assets_top_view_cafe_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/top-view-cafe.jpg */ "./src/assets/top-view-cafe.jpg");






function createMusicPage() {
  var newDiv = document.createElement('div');
  newDiv.classList.add('music-container');
  newDiv.innerHTML = "<div class=\"main-container\">\n                         <nav class=\"navbar\">\n                        <div class=\"menu-wrapper\">\n                        <div class=\"menu\">\n                        <a class=\"menu-home white\" href=\"\">Home</a>\n                        <a class=\"menu-btn white\" href=\"\">Menu</a>\n                        </div></div></nav>\n                        <div class=\"contain-wrapper foods\">\n                        <img class=\"hero-image left\" src=\"".concat(_assets_artist_adjusting_sound_jpg__WEBPACK_IMPORTED_MODULE_0__, "\">\n                        <h4 class=\"heading4\">WOW<br>&nbsp;CAFE'S<br>&nbsp;&nbsp;MUSIC<br>&nbsp;&nbsp;&nbsp;& STUDIO</h4>\n                        <img class=\"hero-image right\" src=\"").concat(_assets_girl_singing_song_jpg__WEBPACK_IMPORTED_MODULE_1__, "\"></div>\n                        <p>LIFE, HE REAlIZE, WAS MUCH LIKE A SONG. IN THE BEGINNING THERE IS MYSTERY, IN THE END THERE IS CONFIRMATION, \n                        BUT IT\u2019S IN THE MIDDLE WHERE ALL THE EMOTION RESIDES TO MAKE THE WHOLE THING WORTHWHILE. </p>\n                        <div class=\"contain-wrapper foods\">\n                        <div class=\"image-wrapper\">\n                        <img class=\"hero-image right\" src=\"").concat(_assets_girl_singing_on_the_chair_jpg__WEBPACK_IMPORTED_MODULE_2__, "\">\n                        <h5 class=\"heading5 about\">ABOUT<br>STUDIO</h5>\n                        <p class=\"about\">A library is a collection of materials, books or media that are accessible \n                        for use and not just for display purposes. A library provides physical (hard copies) or digital \n                        access (soft copies) materials, and may be a physical location or a virtual space, or both. A \n                        library's collection can include printed materials and others.\n                        </p></div>\n                        <img class=\"content-image right\" src=\"").concat(_assets_artist_singing_on_the_mic_jpg__WEBPACK_IMPORTED_MODULE_3__, "\"></div>\n                        <div class=\"info-wrapper\">\n                        <h4 class=\"info\">Featured<br>Artist</h4>\n                        <div class=\"divider top\">\n                        <h5>JAMES MURRY</h6>\n                        <h6>R & B</h6>\n                        <h6 class=\"is-thin\">30 SONGS</h6>\n                        </div>\n                        <div class=\"divider\">\n                        <h5>LIL TEACA</h5>\n                        <h6>TRAP</h6>\n                        <h6 class=\"is-thin\">10 SONGS</h6></div>\n                        <div class=\"divider\">\n                        <h5>BLACK BLUE</h5>\n                        <h6>COUNTRY</h6>\n                        <h6 class=\"is-thin\">20 SONGS</h6></div>\n                        <div class=\"divider\">\n                        <h5>TENZIN TREPZ</h5>\n                        <h6>HIP HOP</h6>\n                        <h6 class=\"is-thin\">5 SONGS</h6></div>\n                        <div class=\"divider\">\n                        <h5>GOZILLLA</h5>\n                        <h6>ROCK & ROLL</h6>\n                        <h6 class=\"is-thin\">7 SONGS</h6></div>\n                        <div class=\"divider\">\n                        <h5>JUSTIN POLLOCK</h5>\n                        <h6>POP</h6>\n                        <h6 class=\"is-thin\">13 SONGS</h6></div>\n                        <div class=\"divider\"><h5>KUNSNAG</h5>\n                        <h6>R & B</h6>\n                        <h6 class=\"is-thin\">20 SONGS</h6></div>\n                        <div class=\"divider\"><h5>BIT ROCK</h5>\n                        <h6>ROCK & ROLL</h6>\n                        <h6 class=\"is-thin\">7 SONGS</h6></div>\n                        <div class=\"divider\"><h5>BILLIE</h5>\n                        <h6>POP</h6>\n                        <h6 class=\"is-thin\">40 SONGS</h6></div>\n                        </div>\n                        </div>\n                        <footer id=\"footer\" class=\"footer\">\n                        <div class=\"contain-wrapper\">\n                        <h1 class=\"heading1 music\">WOW <br>&nbsp;CAFE</h1>\n                        <img id=\"video\" src=\"").concat(_assets_top_view_cafe_jpg__WEBPACK_IMPORTED_MODULE_4__, "\"></div>\n                        <div class=\"social-media\">\n                        <a class=\"text-link white\" href=\"https://careers.swiggy.com/#/\" target=\"_blank\">CAREER</a>\n                        <a class=\"text-link white\" href=\"https://www.facebook.com/login.php\" target=\"_blank\">FACEBOOK</a>\n                        <a class=\"text-link white\" href=\"https://www.instagram.com/accounts/login/\" target=\"_blank\">INSTAGRAM</a>\n                        <a class=\"text-link white\" href=\"https://www.swiggy.com/privacy-policy\" target=\"_blank\">PRIVATE POLICY</a>\n                        <a class=\"text-link white\" href=\"https://www.amazon.in/books/s?k=books\" target=\"_blank\">BOOKS</a>\n                        </div>\n                        </footer>\n                        ");
  return newDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMusicPage);

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Wrap every letter in a span
function createNavbar() {
  var navWrapper = document.getElementById('navbar-wrapper');
  var content = document.getElementById('home-wrapper');
  var newDiv = document.createElement("div");
  newDiv.classList.add('navbar-nav');
  newDiv.innerHTML = "<div class='container'>\n                        <div class=\"menu-container\"><a href=\"https://form.jotform.com/222239259686467\" target=\"_blank\">Reservation</a></div>\n                        <a class=\"icon-wrapper\">\n                        <div class=\"icon-top\"></div>\n                        <div class=\"icon-bottom\"></div></a>\n                        <div class=\"menu-link-wrapper\">\n                        <div class=\"list-item first\"><a class=\"text-link first\" href=\"\">FOOD & DRINKS</a></div>\n                        <div class=\"list-item second\"><a class=\"text-link second\" href=\"\">LIBRARY</a></div>\n                        <div class=\"list-item third\"><a class=\"text-link third\" href=\"\">EVENTS</a></div>\n                        <div class=\"list-item forth\"><a class=\"text-link forth\" href=\"\">MUSIC STUDIO</a></div></div>\n                        <h2 class=\"menu-heading\">WOW<br>&nbsp;CAFE</h2>\n                        </div>";
  navWrapper.appendChild(newDiv);
  return navWrapper;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavbar);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Womack.ttf */ "./src/fonts/Womack.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,700&family=Lora:wght@400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Womack\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\n*, *::before, *::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: 1vw;\n  color: #1a1b1f;\n}\n\nbody {\n  font-size: 1vw;\n  color: #1a1b1f;\n  font-family: \"Lato\", sans-serif;\n}\n\n.heading1 {\n  position: absolute;\n  font-family: \"Womack\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  font-size: 28.084375em;\n  line-height: 0.8;\n  color: #0c6ee1;\n  z-index: 1;\n}\n\n.heading1 .word {\n  display: inline-block;\n  font-size: 1em;\n  color: #0c6ee1;\n}\n\n.heading1.food {\n  color: #e10cd8;\n  z-index: 1;\n}\n\n.heading1.library {\n  color: #e17f0c;\n  z-index: 1;\n}\n\n.heading1.music {\n  color: #0ce114;\n  z-index: 1;\n}\n\n.heading1.event {\n  color: #0c6ee1;\n  z-index: 1;\n}\n\n.heading4 {\n  margin-top: 10px;\n  position: absolute;\n  right: 8%;\n  font-size: 11.0625em;\n  font-family: \"Lora\", Georgia, \"Times New Roman\", Times, serif;\n  line-height: 1;\n  color: #f0f0f0;\n}\n\n.heading5 {\n  margin-top: 20px;\n  margin-bottom: 30px;\n  color: #f0f0f0;\n  font-family: \"Lora\", Georgia, \"Times New Roman\", Times, serif;\n  font-size: 6.8125em;\n  line-height: 0.8;\n}\n\n.heading5.about {\n  position: absolute;\n  right: 20%;\n  bottom: 18%;\n  width: 6.8125em;\n}\n\nh4 {\n  margin-bottom: 120px;\n  font-size: 11.0625em;\n  line-height: 0.8;\n  font-family: \"Lora\", Georgia, \"Times New Roman\", Times, serif;\n  color: #f0f0f0;\n}\n\nh5 {\n  font-size: 4.25em;\n  line-height: 0.8;\n  color: #f0f0f0;\n}\n\nh6 {\n  font-size: 2.625em;\n  font-weight: normal;\n  line-height: 0.8;\n  color: #f0f0f0;\n}\n\np {\n  margin-top: 200px;\n  margin-left: 250px;\n  width: 17em;\n  color: #f0f0f0;\n  font-size: 1.25em;\n}\n\na {\n  cursor: pointer;\n}\n\np.about {\n  width: 20em;\n  position: absolute;\n  left: 12%;\n  bottom: -10%;\n}\n\n.navbar {\n  display: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  position: fixed;\n  max-width: 1300px;\n}\n\n.navbar-nav {\n  position: fixed;\n  top: -100%;\n  width: 100vw;\n  height: 100vh;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  background-color: #0c6ee1;\n  z-index: 9999;\n}\n\n#content, #navbar-wrapper {\n  max-width: 1300px;\n}\n\nnav {\n  width: 100%;\n}\nnav .menu-wrapper {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnav .menu {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 99;\n}\nnav a {\n  font-size: 4.25em;\n  text-decoration: none;\n  font-family: \"Lora\", serif;\n  color: #1a1b1f;\n}\nnav .white {\n  color: #f0f0f0;\n}\n\n.hero-image.left {\n  margin-left: 250px;\n  width: 19.6875em;\n  max-width: 100%;\n}\n\n.info-wrapper {\n  padding-top: 35em;\n}\n\n.divider {\n  width: 100%;\n  height: 160px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 2px solid #f0f0f0;\n}\n\n.divider.top {\n  border-top: 2px solid #f0f0f0;\n}\n\n.hero-image.right {\n  width: 39.75em;\n}\n\n.content-image.right {\n  margin-right: 100px;\n}\n\n.image-wrapper {\n  margin-top: 400px;\n}\n\n.contain-wrapper {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90vh;\n}\n\n.contain-wrapper.home {\n  height: 80vh;\n}\n\n.contain-wrapper.foods {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n#video {\n  position: relative;\n  margin-top: 30px;\n  width: 53.75em;\n  height: 34.375em;\n}\n\n.social-media {\n  display: flex;\n  height: 10vh;\n  justify-content: space-around;\n  align-items: center;\n}\n.social-media a {\n  text-decoration: none;\n  font-family: \"lato\", Arial, Helvetica, sans-serif;\n  font-size: 1.625em;\n  font-weight: normal;\n  z-index: 99;\n}\n\na.white {\n  color: #f0f0f0;\n}\n\nfooter {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #0c6ee1;\n}\n\n.footer.black {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #1a1b1f;\n}\n\n#home-wrapper {\n  max-width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.main-container {\n  max-width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 200px;\n}\n\n.food-container {\n  width: 100%;\n  background-color: #e10cd8;\n  padding-top: 150px;\n}\n\n.library-container {\n  max-width: 100%;\n  background-color: #e17f0c;\n  padding-top: 150px;\n}\n\n.contact-container {\n  max-width: 100%;\n  background-color: #0c6ee1;\n  padding-top: 150px;\n}\n\n.contact-info {\n  margin-top: 20px;\n  line-height: 45px;\n}\n\n.info-visit {\n  margin-bottom: 20px;\n}\n\n#googleMap {\n  margin-top: 50px;\n}\n\n#googleMap > p {\n  margin-top: 8px;\n  margin-bottom: 8px;\n  margin-left: 0px;\n  font-size: 1.6em;\n  font-weight: 500;\n  font-style: oblique;\n}\n\n.music-container {\n  max-width: 100%;\n  background-color: #0ce114;\n  padding-top: 150px;\n}\n\n.event-container {\n  max-width: 100%;\n  background-color: #0c6ee1;\n  padding-top: 150px;\n}\n\n.menu-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.menu-container a {\n  text-decoration: none;\n  font-size: 4.25em;\n  font-family: \"lora\", Georgia, \"Times New Roman\", Times, serif;\n  color: #f0f0f0;\n}\n\n.icon-wrapper {\n  position: absolute;\n  right: 5%;\n  top: 10%;\n  text-decoration: none;\n}\n.icon-wrapper .icon-top {\n  width: 50px;\n  height: 2px;\n  background-color: #f0f0f0;\n  margin-bottom: 8px;\n}\n.icon-wrapper .icon-bottom {\n  width: 50px;\n  height: 2px;\n  background-color: #f0f0f0;\n}\n\n.menu-link-wrapper {\n  padding-left: 40px;\n  padding-right: 40px;\n  display: flex;\n  justify-content: space-around;\n}\n.menu-link-wrapper .list-item.first {\n  overflow: hidden;\n  margin-top: 5%;\n}\n.menu-link-wrapper .list-item.second {\n  overflow: hidden;\n  margin-top: 15%;\n}\n.menu-link-wrapper .list-item.third {\n  overflow: hidden;\n  margin-top: 25%;\n}\n.menu-link-wrapper .list-item.forth {\n  overflow: hidden;\n  margin-top: 35%;\n}\n.menu-link-wrapper a {\n  text-decoration: none;\n  color: #f0f0f0;\n  font-size: 1.625em;\n  font-family: \"lora\", Georgia, \"Times New Roman\", Times, serif;\n}\n\n.menu-heading {\n  position: absolute;\n  font-family: \"Womack\", Georgia, \"Times New Roman\", Times, serif;\n  font-weight: normal;\n  line-height: 0.7;\n  opacity: 0.6;\n  top: 20%;\n  right: -50%;\n  color: #f0f0f0;\n  font-size: 17.9375em;\n}\n\n@media screen and (max-width: 1024px) {\n  .heading5.about {\n    position: absolute;\n    right: 20%;\n    bottom: 10%;\n    width: 6.8125em;\n  }\n  p.about {\n    width: 20em;\n    position: absolute;\n    left: 7%;\n    bottom: -6%;\n  }\n  .hero-image.left {\n    margin-left: 200px;\n    width: 19.6875em;\n    max-width: 100%;\n  }\n  .heading4 {\n    margin-top: 10px;\n    position: absolute;\n    right: 5%;\n    font-size: 11.0625em;\n    font-family: \"Lora\", Georgia, \"Times New Roman\", Times, serif;\n    line-height: 1;\n    color: #f0f0f0;\n  }\n  .content-image.right {\n    margin-right: 20px;\n  }\n  .menu-heading {\n    position: absolute;\n    font-family: \"Womack\", Georgia, \"Times New Roman\", Times, serif;\n    font-weight: normal;\n    line-height: 0.7;\n    opacity: 0.6;\n    top: 20%;\n    right: -50%;\n    color: #f0f0f0;\n    font-size: 17.9375em;\n  }\n  .menu-link-wrapper {\n    margin-top: 100px;\n    padding-left: 40px;\n    padding-right: 40px;\n    display: flex;\n    justify-content: space-around;\n  }\n  .menu-link-wrapper .list-item.first {\n    overflow: hidden;\n    margin-top: 5%;\n  }\n  .menu-link-wrapper .list-item.second {\n    overflow: hidden;\n    margin-top: 15%;\n  }\n  .menu-link-wrapper .list-item.third {\n    overflow: hidden;\n    margin-top: 25%;\n  }\n  .menu-link-wrapper .list-item.forth {\n    overflow: hidden;\n    margin-top: 35%;\n  }\n  .menu-link-wrapper a {\n    text-decoration: none;\n    color: #f0f0f0;\n    font-size: 1.625em;\n    font-family: \"lora\", Georgia, \"Times New Roman\", Times, serif;\n  }\n}\n@media screen and (max-width: 768px) {\n  .menu-link-wrapper {\n    margin-top: 100px;\n    padding-left: 40px;\n    padding-right: 40px;\n    display: flex;\n    justify-content: space-around;\n  }\n  .menu-link-wrapper .list-item.first {\n    overflow: hidden;\n    margin-top: 5%;\n  }\n  .menu-link-wrapper .list-item.second {\n    overflow: hidden;\n    margin-top: 15%;\n  }\n  .menu-link-wrapper .list-item.third {\n    overflow: hidden;\n    margin-top: 25%;\n  }\n  .menu-link-wrapper .list-item.forth {\n    overflow: hidden;\n    margin-top: 35%;\n  }\n  .menu-link-wrapper a {\n    text-decoration: none;\n    color: #f0f0f0;\n    font-size: 1.625em;\n    font-family: \"lora\", Georgia, \"Times New Roman\", Times, serif;\n  }\n  .heading5.about {\n    position: absolute;\n    right: 20%;\n    bottom: 10%;\n    width: 6.8125em;\n  }\n  p.about {\n    width: 20em;\n    position: absolute;\n    left: -3%;\n    bottom: -2%;\n  }\n  .hero-image.left {\n    margin-left: 200px;\n    width: 19.6875em;\n    max-width: 100%;\n  }\n  .heading4 {\n    margin-top: 10px;\n    position: absolute;\n    right: 5%;\n    font-size: 11.0625em;\n    font-family: \"Lora\", Georgia, \"Times New Roman\", Times, serif;\n    line-height: 1;\n    color: #f0f0f0;\n  }\n  .content-image.right {\n    margin-right: 20px;\n  }\n}\n@media screen and (max-width: 425px) {\n  .menu-link-wrapper {\n    margin-top: 100px;\n    padding-left: 40px;\n    padding-right: 40px;\n    display: flex;\n    justify-content: space-around;\n  }\n  .menu-link-wrapper .list-item.first {\n    overflow: hidden;\n    margin-top: 5%;\n  }\n  .menu-link-wrapper .list-item.second {\n    overflow: hidden;\n    margin-top: 15%;\n  }\n  .menu-link-wrapper .list-item.third {\n    overflow: hidden;\n    margin-top: 25%;\n  }\n  .menu-link-wrapper .list-item.forth {\n    overflow: hidden;\n    margin-top: 35%;\n  }\n  .menu-link-wrapper a {\n    text-decoration: none;\n    color: #f0f0f0;\n    font-size: 1.625em;\n    font-family: \"lora\", Georgia, \"Times New Roman\", Times, serif;\n  }\n  .heading5.about {\n    position: absolute;\n    right: -10%;\n    bottom: 10%;\n    width: 6.8125em;\n  }\n  p.about {\n    width: 20em;\n    position: absolute;\n    left: -3%;\n    bottom: -2%;\n  }\n  .hero-image.left {\n    margin-left: 200px;\n    width: 19.6875em;\n    max-width: 100%;\n  }\n  .heading4 {\n    margin-top: 10px;\n    position: absolute;\n    right: 5%;\n    font-size: 11.0625em;\n    font-family: \"Lora\", Georgia, \"Times New Roman\", Times, serif;\n    line-height: 1;\n    color: #f0f0f0;\n  }\n  .content-image.right {\n    margin-right: 20px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,700&family=Lora:wght@400;500;600;700&display=swap');\n\n@font-face { \n  font-family: 'Womack';\n  src: url('../fonts/Womack.ttf') format('truetype');\n  }\n\n$primary-color: #0c6ee1;\n$secondary-color: #f0f0f0;\n$secondary-color-black: #1a1b1f;\n$complementary-color-pink: #e10cd8;\n$complementary-color-neon: #0ce114;\n$complementary-color-mustard: #e17f0c;\n\n\n*,*::before,*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: 1vw;\n  color: $secondary-color-black;\n}\n\nbody {\n  font-size: 1vw;\n  color: $secondary-color-black;\n  font-family: 'Lato', sans-serif;\n}\n\n.heading1 {\n  position: absolute;\n  font-family: 'Womack', Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  font-size: 28.084375em;\n  line-height: 0.8;\n  color: $primary-color;\n  z-index: 1;\n}\n\n.heading1 .word {\n  display: inline-block;\n  font-size: 1em;\n  color: $primary-color;\n}\n\n.heading1.food {\n  color:$complementary-color-pink;\n  z-index: 1;\n}\n\n.heading1.library {\n  color:$complementary-color-mustard;\n  z-index: 1;\n}\n\n.heading1.music {\n  color:$complementary-color-neon;\n  z-index: 1;\n}\n\n.heading1.event {\n  color:$primary-color;\n  z-index: 1;\n}\n\n.heading4 {\n  margin-top: 10px;\n  position: absolute;\n  right: 8%;\n  font-size: 11.0625em;\n  font-family: 'Lora', Georgia, 'Times New Roman', Times, serif;\n  line-height: 1;\n  color: $secondary-color;\n\n}\n\n.heading5 {\n  margin-top: 20px;\n  margin-bottom: 30px;\n  color: $secondary-color;\n  font-family: 'Lora', Georgia, 'Times New Roman', Times, serif;\n  font-size: 6.8125em;\n  line-height: 0.8;\n}\n\n.heading5.about {\n  position: absolute;\n  right: 20%;\n  bottom: 18%;\n  width: 6.8125em;\n}\n\n\nh4 {\n  margin-bottom: 120px;\n  font-size: 11.0625em;\n  line-height: 0.8;\n  font-family: 'Lora', Georgia, 'Times New Roman', Times, serif;\n  color: $secondary-color;\n}\n\nh5 {\n  font-size: 4.25em;\n  line-height: 0.8;\n  color: $secondary-color;\n}\n\n\nh6 {\n  font-size: 2.625em;\n  font-weight: normal;\n  line-height: 0.8;\n  color: $secondary-color;\n}\n\np {\n  margin-top: 200px;\n  margin-left: 250px;\n  width: 17em;\n  color: $secondary-color;\n  font-size: 1.25em;\n}\n\na {\n  cursor: pointer;\n}\n\np.about {\n\n  width: 20em;\n  position: absolute;\n  left: 12%;\n  bottom: -10%;\n}\n\n.navbar {\n  display: none;\n  padding-left: 20px;\n  padding-right: 20px;\n  position: fixed;\n  max-width: 1300px;\n}\n\n.navbar-nav {\n  position: fixed;\n  top: -100%;\n  width: 100vw;\n  height: 100vh;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  background-color: $primary-color;\n  z-index: 9999;\n}\n\n\n#content, #navbar-wrapper {\n  max-width: 1300px;\n}\n\n\nnav {\n  width: 100%;\n  .menu-wrapper {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .menu {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 99;\n  }\n\n  a {\n    font-size: 4.25em;\n    text-decoration: none;\n    font-family: 'Lora', serif;\n    color: $secondary-color-black;\n\n  }\n\n  .white {\n    color: $secondary-color;\n    \n    }\n  \n}\n\n.hero-image.left {\n  margin-left: 250px;\n  width: 19.6875em;\n  max-width: 100%;\n}\n\n.info-wrapper {\n  padding-top: 35em;\n}\n\n\n.divider {\n  width: 100%;\n  height: 160px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 2px solid $secondary-color;\n}\n\n.divider.top {\n  border-top: 2px solid $secondary-color;\n}\n\n.hero-image.right {\n  width: 39.75em;\n}\n\n.content-image.right {\n  margin-right: 100px;\n}\n\n.image-wrapper {\n  margin-top: 400px;\n}\n\n.contain-wrapper {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90vh;\n}\n\n.contain-wrapper.home {\n  height: 80vh;\n}\n\n.contain-wrapper.foods {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n#video {\n  position: relative;\n  margin-top: 30px;\n  width: 53.75em;\n  height: 34.375em;\n}\n\n\n.social-media {\n  display: flex;\n  height: 10vh;\n  justify-content: space-around;\n  align-items: center;\n  \na {\ntext-decoration: none;\nfont-family: \"lato\", Arial, Helvetica, sans-serif;\nfont-size: 1.625em;\nfont-weight: normal;\nz-index: 99;\n}\n}\n\na.white {\n  color: $secondary-color;\n}\n\nfooter {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: $primary-color;\n\n}\n\n.footer.black {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: $secondary-color-black;\n}\n\n#home-wrapper {\n  max-width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.main-container {\n  max-width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 200px;\n}\n\n.food-container {\n  width: 100%;\n  background-color: $complementary-color-pink;\n  padding-top: 150px;\n\n}\n\n.library-container {\n  max-width: 100%;\n  background-color: $complementary-color-mustard;\n  padding-top: 150px;\n}\n\n.contact-container {\n  max-width: 100%;\n  background-color: $primary-color;\n  padding-top: 150px;\n}\n\n.contact-info {\n  margin-top: 20px;\n  line-height: 45px;\n}\n\n.info-visit {\n  margin-bottom: 20px;\n}\n\n#googleMap {\n  margin-top: 50px;\n}\n\n#googleMap > p {\n  margin-top: 8px;\n  margin-bottom: 8px;\n  margin-left: 0px;\n  font-size: 1.6em;\n  font-weight: 500;\n  font-style: oblique;\n}\n\n\n.music-container {\n  max-width: 100%;\n  background-color: $complementary-color-neon;\n  padding-top: 150px;\n}\n\n.event-container {\n  max-width: 100%;\n  background-color: $primary-color;\n  padding-top: 150px;\n}\n\n.menu-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  a{\n    text-decoration: none;\n    font-size: 4.25em;\n    font-family: 'lora', Georgia, 'Times New Roman', Times, serif;\n    color: $secondary-color;\n  }\n}\n\n.icon-wrapper {\n  position: absolute;\n  right: 5%;\n  top: 10%;\n  text-decoration: none;\n\n  .icon-top {\n    width: 50px;\n    height: 2px;\n    background-color: $secondary-color;\n    margin-bottom: 8px;\n  }\n\n  .icon-bottom {\n    width: 50px;\n    height: 2px;\n    background-color: $secondary-color;\n  }\n}\n\n.menu-link-wrapper {\n  padding-left: 40px;\n  padding-right: 40px;\n  display: flex;\n  justify-content: space-around;\n\n  .list-item.first{\n    overflow: hidden;\n    margin-top: 5%;\n  }\n\n  .list-item.second {\n    overflow: hidden;\n    margin-top: 15%;\n  }\n  \n  .list-item.third {\n    overflow: hidden;\n    margin-top: 25%;\n  }\n  \n  .list-item.forth {\n    overflow: hidden;\n    margin-top: 35%;\n  }\n\n  a {\n    text-decoration: none;\n    color: $secondary-color;\n    font-size: 1.625em;\n    font-family: 'lora', Georgia, 'Times New Roman', Times, serif;\n  }\n\n}\n\n.menu-heading {\n    position: absolute;\n    font-family: 'Womack', Georgia, 'Times New Roman', Times, serif;\n    font-weight: normal;\n    line-height: 0.7;\n    opacity: 0.6;\n    top: 20%;\n    right: -50%;\n    color: $secondary-color;\n    font-size: 17.9375em;\n}\n\n\n\n@media screen and (max-width: 1024px) {\n\n  .heading5.about {\n    position: absolute;\n    right: 20%;\n    bottom: 10%;\n    width: 6.8125em;\n  }\n\n  p.about {\n    width: 20em;\n    position: absolute;\n    left: 7%;\n    bottom: -6%;\n  }\n\n  .hero-image.left {\n    margin-left: 200px;\n    width: 19.6875em;\n    max-width: 100%;\n  }\n\n  .heading4 {\n    margin-top: 10px;\n    position: absolute;\n    right: 5%;\n    font-size: 11.0625em;\n    font-family: 'Lora', Georgia, 'Times New Roman', Times, serif;\n    line-height: 1;\n    color: $secondary-color;\n  \n  }\n\n  .content-image.right {\n    margin-right: 20px;\n  }\n\n  .menu-heading {\n    position: absolute;\n    font-family: 'Womack', Georgia, 'Times New Roman', Times, serif;\n    font-weight: normal;\n    line-height: 0.7;\n    opacity: 0.6;\n    top: 20%;\n    right: -50%;\n    color: $secondary-color;\n    font-size: 17.9375em;\n}\n\n.menu-link-wrapper {\n  margin-top: 100px;\n  padding-left: 40px;\n  padding-right: 40px;\n  display: flex;\n  justify-content: space-around;\n\n  .list-item.first{\n    overflow: hidden;\n    margin-top: 5%;\n  }\n\n  .list-item.second {\n    overflow: hidden;\n    margin-top: 15%;\n  }\n  \n  .list-item.third {\n    overflow: hidden;\n    margin-top: 25%;\n  }\n  \n  .list-item.forth {\n    overflow: hidden;\n    margin-top: 35%;\n  }\n\n  a {\n    text-decoration: none;\n    color: $secondary-color;\n    font-size: 1.625em;\n    font-family: 'lora', Georgia, 'Times New Roman', Times, serif;\n  }\n\n}\n\n}\n\n@media screen and (max-width: 768px) {\n\n  .menu-link-wrapper {\n    margin-top: 100px;\n    padding-left: 40px;\n    padding-right: 40px;\n    display: flex;\n    justify-content: space-around;\n  \n    .list-item.first{\n      overflow: hidden;\n      margin-top: 5%;\n    }\n  \n    .list-item.second {\n      overflow: hidden;\n      margin-top: 15%;\n    }\n    \n    .list-item.third {\n      overflow: hidden;\n      margin-top: 25%;\n    }\n    \n    .list-item.forth {\n      overflow: hidden;\n      margin-top: 35%;\n    }\n  \n    a {\n      text-decoration: none;\n      color: $secondary-color;\n      font-size: 1.625em;\n      font-family: 'lora', Georgia, 'Times New Roman', Times, serif;\n    }\n  \n  }\n\n  .heading5.about {\n    position: absolute;\n    right: 20%;\n    bottom: 10%;\n    width: 6.8125em;\n  }\n\n  p.about {\n    width: 20em;\n    position: absolute;\n    left: -3%;\n    bottom: -2%;\n  }\n\n  .hero-image.left {\n    margin-left: 200px;\n    width: 19.6875em;\n    max-width: 100%;\n  }\n\n  .heading4 {\n    margin-top: 10px;\n    position: absolute;\n    right: 5%;\n    font-size: 11.0625em;\n    font-family: 'Lora', Georgia, 'Times New Roman', Times, serif;\n    line-height: 1;\n    color: $secondary-color;\n  \n  }\n\n  .content-image.right {\n    margin-right: 20px;\n  }\n\n}\n\n\n@media screen and (max-width: 425px) {\n\n  .menu-link-wrapper {\n    margin-top: 100px;\n    padding-left: 40px;\n    padding-right: 40px;\n    display: flex;\n    justify-content: space-around;\n  \n    .list-item.first{\n      overflow: hidden;\n      margin-top: 5%;\n    }\n  \n    .list-item.second {\n      overflow: hidden;\n      margin-top: 15%;\n    }\n    \n    .list-item.third {\n      overflow: hidden;\n      margin-top: 25%;\n    }\n    \n    .list-item.forth {\n      overflow: hidden;\n      margin-top: 35%;\n    }\n  \n    a {\n      text-decoration: none;\n      color: $secondary-color;\n      font-size: 1.625em;\n      font-family: 'lora', Georgia, 'Times New Roman', Times, serif;\n    }\n  \n  }\n\n  .heading5.about {\n    position: absolute;\n    right: -10%;\n    bottom: 10%;\n    width: 6.8125em;\n  }\n\n  p.about {\n    width: 20em;\n    position: absolute;\n    left: -3%;\n    bottom: -2%;\n  }\n\n  .hero-image.left {\n    margin-left: 200px;\n    width: 19.6875em;\n    max-width: 100%;\n  }\n\n  .heading4 {\n    margin-top: 10px;\n    position: absolute;\n    right: 5%;\n    font-size: 11.0625em;\n    font-family: 'Lora', Georgia, 'Times New Roman', Times, serif;\n    line-height: 1;\n    color: $secondary-color;\n  \n  }\n\n  .content-image.right {\n    margin-right: 20px;\n  }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/artist-adjusting-sound.jpg":
/*!***********************************************!*\
  !*** ./src/assets/artist-adjusting-sound.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "artist-adjusting-sound.jpg";

/***/ }),

/***/ "./src/assets/artist-singing-on-the-mic.jpg":
/*!**************************************************!*\
  !*** ./src/assets/artist-singing-on-the-mic.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "artist-singing-on-the-mic.jpg";

/***/ }),

/***/ "./src/assets/coffee-at-coffee-table.jpg":
/*!***********************************************!*\
  !*** ./src/assets/coffee-at-coffee-table.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "coffee-at-coffee-table.jpg";

/***/ }),

/***/ "./src/assets/coffee-pouring-from-judge.jpg":
/*!**************************************************!*\
  !*** ./src/assets/coffee-pouring-from-judge.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "coffee-pouring-from-judge.jpg";

/***/ }),

/***/ "./src/assets/event-held-in-musume.jpg":
/*!*********************************************!*\
  !*** ./src/assets/event-held-in-musume.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "event-held-in-musume.jpg";

/***/ }),

/***/ "./src/assets/exhibition-event.jpg":
/*!*****************************************!*\
  !*** ./src/assets/exhibition-event.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "exhibition-event.jpg";

/***/ }),

/***/ "./src/assets/food-on-the-table.jpg":
/*!******************************************!*\
  !*** ./src/assets/food-on-the-table.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "food-on-the-table.jpg";

/***/ }),

/***/ "./src/assets/girl-singing-on-the-chair.jpg":
/*!**************************************************!*\
  !*** ./src/assets/girl-singing-on-the-chair.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "girl-singing-on-the-chair.jpg";

/***/ }),

/***/ "./src/assets/girl-singing-song.jpg":
/*!******************************************!*\
  !*** ./src/assets/girl-singing-song.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "girl-singing-song.jpg";

/***/ }),

/***/ "./src/assets/girls-at-musume.jpg":
/*!****************************************!*\
  !*** ./src/assets/girls-at-musume.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "girls-at-musume.jpg";

/***/ }),

/***/ "./src/assets/inside-view-of-cafe.jpg":
/*!********************************************!*\
  !*** ./src/assets/inside-view-of-cafe.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "inside-view-of-cafe.jpg";

/***/ }),

/***/ "./src/assets/people-enjoying-art-exhibition.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/people-enjoying-art-exhibition.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "people-enjoying-art-exhibition.jpg";

/***/ }),

/***/ "./src/assets/people-in-cafe.jpg":
/*!***************************************!*\
  !*** ./src/assets/people-in-cafe.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "people-in-cafe.jpg";

/***/ }),

/***/ "./src/assets/pizza-coffee-cake.jpg":
/*!******************************************!*\
  !*** ./src/assets/pizza-coffee-cake.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza-coffee-cake.jpg";

/***/ }),

/***/ "./src/assets/sand-witch.jpg":
/*!***********************************!*\
  !*** ./src/assets/sand-witch.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sand-witch.jpg";

/***/ }),

/***/ "./src/assets/students-in-cafe.mp4":
/*!*****************************************!*\
  !*** ./src/assets/students-in-cafe.mp4 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "students-in-cafe.mp4";

/***/ }),

/***/ "./src/assets/top-view-cafe.jpg":
/*!**************************************!*\
  !*** ./src/assets/top-view-cafe.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "top-view-cafe.jpg";

/***/ }),

/***/ "./src/assets/women-reading-books-in-cafe.jpg":
/*!****************************************************!*\
  !*** ./src/assets/women-reading-books-in-cafe.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "women-reading-books-in-cafe.jpg";

/***/ }),

/***/ "./src/fonts/Womack.ttf":
/*!******************************!*\
  !*** ./src/fonts/Womack.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Womack.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _foods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foods */ "./src/foods.js");
/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./music */ "./src/music.js");
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./library */ "./src/library.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _anime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anime */ "./src/anime.js");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");









var navContainer = document.getElementById('navbar-wrapper');
var container = document.getElementById('content');
var navbar = document.querySelector('.navbar');
var homeBtn = document.querySelector('.home-btn');
var navLinks = document.querySelectorAll('.list-item');

function homePageLoader() {
  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_anime__WEBPACK_IMPORTED_MODULE_7__.headingAnimation)();
  var menuItems = document.querySelector('.menu-home');
  navLinks = document.querySelectorAll('.list-item');
  container = document.getElementById('content');
  navbar = document.querySelector('.navbar');
  var menuBtn = document.querySelector('.menu-btn');
  var menuBar = document.querySelector('.icon-wrapper');
  var contactButton = document.querySelector('.contact');

  function navigateLink() {
    contactButton.addEventListener('click', function (e) {
      e.preventDefault();
      navbar.style.display = 'flex';
      container.textContent = '';
      container.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
    });
    navLinks.forEach(function (navLink, index) {
      navLink.addEventListener('click', function (e) {
        e.preventDefault();
        navbar.style.display = 'flex';
        container.textContent = '';
        (0,_anime__WEBPACK_IMPORTED_MODULE_7__.navbarCloseAnimation)();

        if (index === 0) {
          container.appendChild((0,_foods__WEBPACK_IMPORTED_MODULE_3__["default"])());
          console.log(navLink);
        } else if (index === 1) {
          container.appendChild((0,_library__WEBPACK_IMPORTED_MODULE_5__["default"])());
        } else if (index === 2) {
          container.appendChild((0,_events__WEBPACK_IMPORTED_MODULE_6__["default"])());
        } else {
          container.appendChild((0,_music__WEBPACK_IMPORTED_MODULE_4__["default"])());
        }
      });
    });
  }

  navigateLink();

  function openMenu() {
    menuItems.addEventListener('click', function (e) {
      e.preventDefault();
      (0,_anime__WEBPACK_IMPORTED_MODULE_7__.navbarAnimation)();
    });
    menuBtn.addEventListener('click', function (e) {
      e.preventDefault();
      (0,_anime__WEBPACK_IMPORTED_MODULE_7__.navbarAnimation)();
    });
  }

  openMenu();

  function closeMenu() {
    menuBar.addEventListener('click', function (e) {
      e.preventDefault();
      (0,_anime__WEBPACK_IMPORTED_MODULE_7__.navbarCloseAnimation)();
    });
  }

  closeMenu();
}

homePageLoader();
homeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  navbar.style.display = 'none';
  container.textContent = '';
  navContainer.textContent = '';
  homePageLoader();
});
})();

/******/ })()
;
//# sourceMappingURL=bundleb917f9a28d2e7bc09c92.js.map