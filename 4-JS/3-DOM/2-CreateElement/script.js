let a=10;

let main=document.querySelector("#main");
let listroot=document.querySelector(".listroot");

// console.log(listroot.parentNode);
// console.log(listroot.parentElement);

let item=document.querySelectorAll(".item");

// console.log(item.parentElement)
// console.log(item.parentNode)

// console.log(listroot.childNodes);
// console.log(listroot.children);
// console.log(listroot.firstChild);
// console.log(listroot.lastChild);

// console.log(item.nextSibling);
// console.log(item.previousSibling);
console.log(item[0].nextElementSibling);
console.log(item[3].previousElementSibling);
