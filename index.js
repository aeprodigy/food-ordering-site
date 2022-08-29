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