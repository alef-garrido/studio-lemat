import "./style.scss"

const navContainer = document.getElementById('navContainer')
const menuContainer = document.getElementById('menuContainer')
const menuBtns = document.querySelector('.menuBtns')

const myToggle = function(event, str){
  if(event.target.classList.contains(str)){
    console.log(event)
    menuContainer.classList.toggle('hide')
  }
}

navContainer.addEventListener('click', (e) => myToggle(e, 'menuIcon'))
menuBtns.addEventListener('click', (e) => myToggle(e, 'closeBtn'))
