let menu = document.getElementById("#menu-bars");
let navbar = document.querySelector(".navbar");
let isShow =true;
//menu.onclick=()=>{
  //  menu.classList.toggle('fa-times');
    //navbar.classList.toggle('active')
//}
function showHideInfo(){

    if(isShow){
    navbar.style.display="none";
    return isShow=false;
    }else{
        navbar.style.display="block";
        return isShow=true;
    }
}

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick =()=>{
    document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close').onclick =()=>{
    document.querySelector('#search-form').classList.toggle('active')
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});
