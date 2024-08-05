const mobileMenuToggle = document.querySelector("#mobile-menu-toggle")
const mobileMenu =document.querySelector("#mobile-menu")

//hamburger functionality//
mobileMenuToggle.addEventListener("click", function(){
    mobileMenu.classList.toggle("hidden")
})