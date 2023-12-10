let navBar = document.getElementById('navBar')
let btnNav = document.getElementById('btnNav')
let burger = document.getElementById('burger')
let cross = document.getElementById('cross')

function burgerAction() {
    burger.classList.toggle('desactive')
    cross.classList.toggle('desactive')
}

burger.addEventListener('click', () => {
    burgerAction()
    navBar.classList.toggle('active-navBar')
    navBar.classList.remove('desactive-navBar')
})

cross.addEventListener('click', () => {
    burgerAction()
    navBar.classList.remove('active-navBar')
    navBar.classList.add('desactive-navBar')
})

//----------------- Button Top ---------------- /
let btnTop = document.querySelector('.go-head')

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        btnTop.classList.add('active')
    } else {
        btnTop.classList.remove('active')
    }
})

btnTop.addEventListener('click', () => {
    btnTop.classList.remove('active')
})
