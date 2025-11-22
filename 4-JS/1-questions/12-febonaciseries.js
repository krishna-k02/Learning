// let a=0, b=1;
// let sum=0;
// console.log(a);
// console.log(b);
// let n=10;
// for(let i=3; i<=n-2; i++){
//     sum=a+b;
//     a=b;
//     b=sum;
//     console.log(sum);
// }

let n=5;
let s=0;
function sum(n){
    if(n==1)
        return 1;
    
    //**********  first case 

    // s=n+sum(n-1);
    // return s;

    // ********  second case

    return n+sum(n-1);
}

console.log(sum(n));