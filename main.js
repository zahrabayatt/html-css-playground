document.getElementById("toggleButton").addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
  if (sidebar.classList.contains("open")) {
    sidebar.style.width = "50%";
  } else {
    sidebar.style.width = "0";
  }
});
