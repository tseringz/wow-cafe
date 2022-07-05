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
export default headingAnimation;


function navbarAnimation() {
    anime({
        targets: '.navbar-nav ',
        translateX: 250
      });
};