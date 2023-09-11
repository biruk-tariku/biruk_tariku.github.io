const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY
    > 120);
})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');    
    navlist.classList.toggle('active');    
}

window.onscroll = () =>{
    menu.remove.toggle('bx-x');    
    navlist.remove.toggle('active');    
}


// const text = document.querySelector(".sec-text");

// const textLoad = () => {
//     setTimeout(() => {
//         text.textContent = "Programmer";
//     }, 0);
//     setTimeout(() => {
//         text.textContent = "software Engineer";
//     }, 4000);
//     setTimeout(() => {
//         text.textContent = "full-stack developer";
//     }, 8000);
//     setTimeout(() => {
//         text.textContent = "Content Creator";
//     }, 8000);

// }

// textLoad();



