let burger = document.getElementById('burger')
let navBar = document.getElementById('navBar')

burger.addEventListener('click', () => {
    navBar.classList.toggle('active-navBar')
})
