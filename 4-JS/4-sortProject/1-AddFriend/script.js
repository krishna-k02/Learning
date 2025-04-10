let button=document.querySelector(".button");
let friend=document.querySelector(".fbox");

// friend.innerHTML="krishna"

let flag=0;

button.addEventListener("click",()=>{
    friend.textContent="Request send....";
    button.textContent="Adding...."
    friend.style.color="yellow";
    
    if(flag==0){
        setTimeout(function(){
            friend.textContent="friend💕";
            button.textContent="Remove Friend ?"
            friend.style.color="green";
            flag=1;
        },3000)
        
    }
    else{
        friend.textContent="Extranger";
        button.textContent="Add Friend ?"
        friend.style.color="red";

        flag=0;
    }


})

