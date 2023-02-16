const navbarEL = document.querySelector(".Navbar");
console.log(navbarEL);

const bottcontEL = document.querySelector(".bottomContainer");

console.log(bottcontEL.offsetTop)

window.addEventListener("scroll",()=>{
    if(window.scrollY > (bottcontEL.offsetTop - (navbarEL.offsetHeight + 50))){
        navbarEL.classList.add("active");
    }else{
        navbarEL.classList.remove("active");
    }

})