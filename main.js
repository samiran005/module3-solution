const btn = document.getElementById("btn");
const navItems = document.querySelector(".nav-items");
console.log(navItems);

btn.addEventListener('click',()=>{
    navItems.classList.toggle("drop");
})