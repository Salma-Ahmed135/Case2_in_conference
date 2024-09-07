let navButton = document.getElementById('bars')
let navList = document.querySelector('.navbar .list')

bars.addEventListener('click',function(){
    navList.classList.toggle('slide')
})
const body = document.querySelector("body"),
modeToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
});
