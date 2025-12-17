/* Fixed header */
let header = document.getElementById("header");
let scrollPosition = 50;
window.addEventListener("scroll", () => {
    if (window.scrollY > scrollPosition)
        header.classList.add("fixed");
    else
        header.classList.remove("fixed");
});

/* Burger */
let burger = document.getElementById('burger')
let burgerItem = document.getElementById('burgerItem')
let nav = document.getElementById('nav')
let navInner = document.getElementById('navInner')
let navItem = document.querySelectorAll('.nav__link')
let body = document.getElementById('body')


burger.addEventListener('click', () => {
    burgerItem.classList.toggle('active')
    nav.classList.toggle('active')
    navInner.classList.toggle('active')

    if(burgerItem.classList.contains('active'))
        body.classList.add('no-scroll')
    else
        body.classList.remove('no-scroll')
})

navItem.forEach(item => {
    item.addEventListener('click', () => {
        if(nav.classList.contains('active')){
            nav.classList.remove('active')
            burgerItem.classList.remove('active')
            navInner.classList.remove('active')
            body.classList.remove('no-scroll')
        }
    })
})
