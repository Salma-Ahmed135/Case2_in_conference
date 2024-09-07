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