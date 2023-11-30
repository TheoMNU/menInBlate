let navBar = document.getElementById('navBar')
let btnNav = document.getElementById('btnNav')
let burger = document.getElementById('burger')
let cross = document.getElementById('cross')

burger.addEventListener('click', () => {
    navBar.classList.toggle('active-navBar')
    navBar.classList.remove('desactive-navBar')
    burger.classList.toggle('desactive')
    cross.classList.toggle('desactive')
})

cross.addEventListener('click', () => {
    burger.classList.toggle('desactive')
    cross.classList.toggle('desactive')
    navBar.classList.remove('active-navBar')
    navBar.classList.add('desactive-navBar')
})
