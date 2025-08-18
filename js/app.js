const menubtn = document.querySelector("#menu-mobile");
const menu = document.querySelector("#menu");


menubtn.addEventListener('click',()=>{
        if (menu.classList.contains('hidden')){
            menu.classList.remove('hidden')
        }else{
            menu.classList.add('hidden')
        }
})