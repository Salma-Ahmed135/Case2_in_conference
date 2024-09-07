const body = document.querySelector("body"),
modeToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
});

// sidebarToggle.addEventListener("click", () =>{
//     sidebar.classList.toggle("close");
// })

function myFunction() {
    var input, filter, table, tr, i, j;
    filter = document.getElementById("myInput").value.toLowerCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName(".data-list");
    for (i = 1; i < tr.length; i++) {
      tr[i].style.display = "none";
      const tdArray = tr[i].getElementsByTagName("td");
      for (var j = 0; j < tdArray.length; j++) {
        const cellValue = tdArray[j];
        if (cellValue && cellValue.innerHTML.toLowerCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        }
      }
    }
  } 


//   let delBtn=document.querySelectorAll("#del-btn");
//   let popup=document.querySelectorAll("#popup");
//   for(let i = 0; i < delBtn.length; i++){
//   delBtn[i].addEventListener("click",function(e){
//       e.preventDefault()
//       popup.classList.remove("d-none")
//   })
// }
  // let YES=document.querySelectorAll(".btn1");
  // let NO=document.querySelectorAll(".btn2");
  
  // YES.addEventListener("click", function(){
  //     popup.classList.add("d-none")
  // })
  // NO.addEventListener("click", function(){
  //     popup.classList.add("d-none")
  // })
 
let delBtn=document.getElementById("del-btn");
let popup=document.getElementById("popup");

delBtn.addEventListener("click",function(e){
    e.preventDefault()
    popup.classList.remove("d-none")
})
let YES=document.getElementById("yes");
let NO=document.getElementById("no");

YES.addEventListener("click", function(){
    popup.classList.add("d-none")
})
NO.addEventListener("click", function(){
    popup.classList.add("d-none")
})


  