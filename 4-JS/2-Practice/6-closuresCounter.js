function count(){
    let a=0;
    return function(){
        a++;
        console.log(a);
    }
}

let counter=count();

counter();
counter();
counter();

counter=count();
counter();
counter();