const portfolio = {};

portfolio.typeEffect = () => {
    let typed = new Typed(".type",  {
        strings: ["", "Web Developer", "Designer", "Copywriter", "Bookworm", "Calligrapher"],
        typeSpeed: 75,
        backSpeed: 75,
        loop: true
    });
}

portfolio.parallax = () => {
    const scene = document.getElementById('butterfly');
    const parallaxInstance = new Parallax(butterfly);
}

portfolio.hamburgerMenu = () => {
    $('.hamburger').click(function(){
        $('.navContainer').toggleClass('active');
    })
}

// Initiate the app
portfolio.init = () => {
    AOS.init();
    portfolio.typeEffect();
    portfolio.parallax();
    portfolio.hamburgerMenu();
}

// Document ready - load HTML/CSS, then initialize JQ!
$(function() {
    portfolio.init();
})