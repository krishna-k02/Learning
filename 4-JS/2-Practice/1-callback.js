function meet(){
    console.log("call to meet");
}

function greet(){
    console.log("call to greet");
}


function fncall(callback){
    callback();
}

fncall(meet);
fncall(greet);

// Timeout function to call the function and execute the funciton after given time in milisecond 

function fncallsettime(callback,deley){
    setTimeout(callback,deley);
}

fncallsettime(meet,3000)