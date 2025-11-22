
let form=document.querySelector("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let data =new FormData(form);
// console.log("event on")

    // let value=data.keys();
    for(let [key,value] of data.entries()){
        console.log(key,"=>",value)
    }
    // let a=event.target.value;
    // console.log(a);

})