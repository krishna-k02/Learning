let a=10;

let h1=document.querySelector("h1");

let h1_id=h1.getAttribute("id");
console.log(h1_id);

h1.setAttribute("id","1stheading");
console.log(h1);

h1_id=h1.getAttribute("id");
console.log(h1_id); 

let div=document.createElement("div");

let body=document.querySelector("body");
div.textContent="Hello Everyone !!"
// body.style.backgroundColor="black"

body.appendChild(div);
console.log(div)
let div1=document.createElement("div");
div1.setAttribute("id","box");

body.appendChild(div1)
console.log(div1);

div1.addEventListener("dblclick",(event)=>{
    console.log(event);
})