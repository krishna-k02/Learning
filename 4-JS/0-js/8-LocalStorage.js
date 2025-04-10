localStorage.setItem("user","krishna");
localStorage.setItem("age","19");

let username=localStorage.getItem("user");
console.log(username);

// localStorage.clear();   // clear all sotore data

// RemoceItem=>

    localStorage.removeItem("age");


// Store Object in localStorage=>

let obj={user:"krishna",id:"useradmin@123"};

// convert obj to string 
let newobj=JSON.stringify(obj);

localStorage.setItem("obj",newobj)
// console.log(newobj)

// get localStorage Obj data=>

    let userdetail=localStorage.getItem("obj");
    // console.log(userdetail)
    // data in string form 
    // ==>

    // convert string to obj form 

    let newuserdetail=JSON.parse(userdetail);
    console.log(newuserdetail);
    
    
    
// Cookies===>>>

// get cookie==>>

// document.cookie.removeItem("id")
// console.log(document.cookie);   

document.cookie="id=user@123";
document.cookie="passwoed=admin@0123";