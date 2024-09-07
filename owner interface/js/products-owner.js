let navButton = document.getElementById('bars')
let navList = document.querySelector('.navbar .list')

bars.addEventListener('click',function(){
    navList.classList.toggle('slide')
})

let rootElement=document.documentElement;
// primarycolor.addEventlistener("input",function(){
//     rootElement.style.setProperty('--primarycolor',`${primarycolor.value}`)
// })
// secondaryColor.addEventlistener("input",function(){
//     rootElement.style.setProperty('--secondarycolor',`${secondarycolor.value}`)
// })
primarycolor.addEventListener('input',function(){
        rootElement.style.setProperty('--primarycolor',`${primarycolor.value}`)

})
secondaryColor.addEventListener('input',function(){
        rootElement.style.setProperty('--secondarycolor',`${secondaryColor.value}`)

})