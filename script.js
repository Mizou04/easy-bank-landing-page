let burger = document.querySelector("[data-menu=btn]");
let menu = document.querySelector("[data-menu=menu]")
let heroImg = document.querySelector(".hero--img");
let icon = burger.getElementsByTagName("img")[0];
let burgerImgSrc = "./images/icon-close.svg";
let closeImgSrc = "./images/icon-hamburger.svg";

burger.onclick = ()=>{
  menu.style.display = menu.style.display == "flex" ? "none" : "flex";
  icon.src = menu.style.display == "flex" ? burgerImgSrc : closeImgSrc;
}

document.addEventListener("click", (e)=>{
  if(e.target.dataset.trigger == "true"){
    menu.dataset.open == "false"
    if(menu.dataset.open == "true"){
      menu.style.display = "flex"
    } else {
      menu.style.display = "none"
    }
  }
})
