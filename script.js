const portfolio = {};

portfolio.typeEffect = () => {
    let typed = new Typed(".type",  {
        strings: ["", "Web Developer", "Designer", "Copywriter", "CRM Email Specialist", "Bookworm"],
        typeSpeed: 75,
        backSpeed: 75,
        loop: true
    });
}

portfolio.parallax = () => {
    const scene = document.getElementById('butterfly');
    const parallaxInstance = new Parallax(butterfly);
}

portfolio.hamburger = () => {
    const hamburger = document.querySelector('.burger');
    const navMenu = document.querySelector('.navContainer');
    
    hamburger.addEventListener('click', mobileMenu);
        function mobileMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    const navLink = document.querySelectorAll(".navLink");

    navLink.forEach(n => n.addEventListener("click", closeMenu));
        function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
}

portfolio.accordion = () =>{
    const acc = document.getElementsByClassName('accordionBox');
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            this.classList.toggle('active')
        })
    }
}

// Initiate the app
portfolio.init = () => {
    AOS.init();
    portfolio.hamburger();
    portfolio.accordion();
    portfolio.typeEffect();
    portfolio.parallax();
}

// Document ready - load HTML/CSS, then initialize JQ!
$(function() {
    portfolio.init();
})