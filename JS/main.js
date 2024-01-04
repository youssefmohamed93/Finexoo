let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal (
    {
        distance: '40px',
        duration: 2050,
        delay: 200,
        reset: true
    }
);

sr.reveal('.home-text',{origin: 'top'});
sr.reveal('.home-image',{origin: 'top'});
sr.reveal('.services-text',{origin: 'top'});
sr.reveal('.services-box',{origin: 'top'});
sr.reveal('.about-text',{origin: 'top'});
sr.reveal('.about-textt',{origin: 'left'});
sr.reveal('.why-text',{origin: 'top'});
sr.reveal('.why-box',{origin: 'top'});
sr.reveal('.team-text',{origin: 'top'});
sr.reveal('.team-box',{origin: 'top'});
sr.reveal('.cust-text',{origin: 'top'});
sr.reveal('.cust-box',{origin: 'top'});
sr.reveal('.footerr',{origin: 'top'});

window.onscroll = function() {
    scrollFunction();
};

scrolltotop.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrolltotop").style.display = "block";
    } else {
      document.getElementById("scrolltotop").style.display = "none";
    }
};
  
  