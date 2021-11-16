import "./style.scss"

const navContainer = document.getElementById('navContainer')
const menuIcon = document.getElementsByClassName('menuIcon')
let iconsM = []
Array.from(menuIcon, (e) => iconsM.push(e))

navContainer.addEventListener('click', (e) => {
  if(e.target.classList.contains('menuIcon')){
    const menuContainer = document.getElementById('menuContainer')
    menuContainer.classList.toggle('hide')
  }
})
