 let btnMenu = document.querySelector('.fa-bars')
let menu = document.querySelector('.menu')

btnMenu.addEventListener('click', function(){
    if(menu.classList.contains('show')){
        menu.classList.remove('show')
        btnMenu.setAttribute('class','fa-solid fa-xmark')
    }
    else{
        menu.classList.add('show')
        btnMenu.setAttribute('class','fa-solid fa-bars')
    }
})
