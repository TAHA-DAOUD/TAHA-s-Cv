/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
    /*========MENU SHOW======*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*======MENU HIDDEN====*/
/* VALIDATE IF CONSTANT EXISTS*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==========show scroll up========*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.sccrollY >= 350 ? scrollUp.classList.add('show-scroll') :
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
    /*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header')
        //when the scroll is greater than 50 viewport height,add the scroll header
    this.scrollY >= 50 ? header.classList.add('bg-header') :
        header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== DARK LIGHT THEME ===============*/
const themeButtom = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('slected-icon')

const getCurrenttheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrenticon = () => themeButtom.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : remove](darkTheme)
    themeButtom.body.classList[selectedIcon === 'ri-moon-line' ? 'add' : remove](iconTheme)
}

themeButtom.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButtom.body.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrenttheme())
    localStorage.setItem('selected-icon', getCurrenticon())
})