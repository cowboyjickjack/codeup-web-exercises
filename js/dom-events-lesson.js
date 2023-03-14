let pageWrapper = document.querySelector('.page-wrapper');
let toggleMenu = document.querySelector('.das-burger-wrapper');
let menuBg = document.querySelector('.mobile-menu-overlay');
toggleMenu.addEventListener('click', function(){
    pageWrapper.classList.toggle('mobile-menu-open');
});
menuBg.addEventListener('click', function(){
    pageWrapper.classList.toggle('mobile-menu-open');
});

let dropdowns = document.querySelectorAll('[data-dropdown="parent"]') 
    dropdowns.forEach(function (dropdown) {
        let toggle = dropdown.querySelector('[data-dropdown="toggle"]')
        toggle.addEventListener('click', function () {
            dropdown.classList.toggle('open')
        })
    });
