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

let Showpass=document.getElementById('eyeicon');
let Pass=document.getElementById('password');

eyeicon.addEventListener('click', function(){
    if (Pass.type==="password"){
        Pass.type="text";
    } else {
        Pass.type="password";
    }
});
let Showpasss=document.getElementById('eyeiconn');
let Passs=document.getElementById('confirmpassword');

eyeiconn.addEventListener('click', function(){
    if (Passs.type==="password"){
        Passs.type="text";
    } else {
        Passs.type="password";
    }
});