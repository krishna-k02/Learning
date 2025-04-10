console.log("hello");

let a=document.getElementById("first");

let b=document.getElementsByClassName("box");

// let c=document.querySelector() 
let c=document.querySelectorAll("p");

a.style.backgroundColor="pink";
a.style.padding="10px";
a.style.fontFamily="arial"

b[0].style.color="red";
b[0].style.backgroundColor="black";
b[0].textContent=`${b[0].textContent} Coading School `;

c[0].style.fontSize="25px";
c[0].style.color="blue";

a.addEventListener("click",()=>{
    a.style.backgroundColor="aqua";
    a.style.cursor="pointer";
})