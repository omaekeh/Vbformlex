const openBtn = document.querySelector("#open-btn");
const navMenu = document.querySelector("#nav-menu");
const faTimes = document.querySelector(".fa-times");
const navLinks = document.querySelectorAll(".nav-link");



openBtn.addEventListener("click", () => {
    navMenu.style.left = 0;
})

faTimes.addEventListener("click", ()=> {
    navMenu.style.left = "500px";
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.style.left = "500px";
    })
})


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("carousel-image")
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex++;
    if (myIndex > x.length) { myIndex = 1; }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
