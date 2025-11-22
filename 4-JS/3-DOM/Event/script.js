let element=1;
console.log("hello");

let div=document.querySelector("div");
div.setAttribute("class","paragraph");

// div.removeAttribute("class");

let p=document.createElement("p");
p.innerText="Hello Coder Army";

// div.append(p);

div.insertAdjacentElement("beforeend",p)

// div.remove();    

let btn=document.querySelector(".btn");
btn.addEventListener("click",(event)=>{
    // console.log("hello");
    // console.log(event)
    // console.log(event.target)
    // console.log(event.type)
    // console.log(event.key)
    // console.log(event.clientX)
    // console.log(event.clientY)
    console.log(event.clientY)
    
})