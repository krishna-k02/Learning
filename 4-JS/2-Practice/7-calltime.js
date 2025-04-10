//  Ques = create a function to pass the function and calltime as a argument to call the given time 

function setfun(fn, limit) {
    let count = 0;
    return function () {
        if (limit > count) {
            count++;
            // console.log(count);
            fn();
        }
    }
}

function greet() {
    console.log("call to greet");
}

let newfun = setfun(greet, 2);

newfun();
newfun();
newfun();
newfun();
newfun();
newfun();
newfun();
newfun();
