const header = document.getElementById("header");
const toggleButton = document.getElementById("toggleButton");
const closeButton = document.getElementById("close_btn");

toggleButton.addEventListener("click", () => {
 
    header.style.left = "0px";
 
});
closeButton.addEventListener("click", () => {
  header.style.left = "-600px";
});
