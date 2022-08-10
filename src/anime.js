 function headingAnimation() {
    anime.timeline({loop: false})
    .add({
      targets: '.heading1 .word',
      scale: [14,1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 800,
      delay: (el, i) => 800 * i
    }).add({
      targets: '.heading1',
      opacity: 100,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
};

 function navbarAnimation() {
  // navbar scroll down animation
    anime({
        targets: '.navbar-nav ',
        translateY: '100%',
        easing: 'easeInOutExpo',
        duration: 2000,
      });
      // humberger menu animation
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
      });

      // Nav link animation 
      var animation = anime({
        targets: '.list-item',
        translateY: 40,
        duration: 2000,
        delay: function(el, i) { return i * 300; },
        direction: 'alternate',
        loop: false,
        easing: 'easeInOutSine',
      });
      //menu heading animation
      anime({
        targets: '.menu-heading',
        translateX: '-100%',
        easing: 'easeInOutExpo',
        duration: 2000,
      }); 
};

function navbarCloseAnimation() {
  // navbar scroll down animation
    anime({
        targets: '.navbar-nav',
        translateY: '-100%',
        easing: 'easeInOutExpo',
        duration: 2000,
      });
      // humburger menu animation
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
      });

      // Nav link animation 
      var animation = anime({
        targets: '.list-item',
        translateY: 0,
        duration: 2000,
        delay: function(el, i) { return i * 300; },
        direction: 'alternate',
        loop: false,
        easing: 'easeInOutSine',
      });

       //menu heading animation
       anime({
        targets: '.menu-heading',
        translateX: '0%',
        easing: 'easeInOutExpo',
        duration: 2000,
      });

}

export { headingAnimation, navbarAnimation, navbarCloseAnimation }