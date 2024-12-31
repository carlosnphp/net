const btnMenu = document.querySelector('.fa-bars')
let navbar = document.querySelector('.navbar')

btnMenu.addEventListener("click", function () {
  if (navbar.classList.contains('navbar')) {
    navbar.classList.remove('navbar')
    btnMenu.setAttribute('class', 'fa-solid fa-xmark')
 
  }
  else {
    navbar.classList.add('navbar')
    btnMenu.setAttribute('class', 'fa-solid fa-bars')
  }
})

