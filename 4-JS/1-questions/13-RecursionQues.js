let prompt = require("prompt-sync")();

// let n=Number(prompt("Enter Number: "));
// console.log(n);

// ***print Hello N times 
function PrintHelloNTimes(n){
    if(n==0)
        return;

    console.log("Hello:"+n);
    PrintHelloNTimes(n-1);
}
// PrintHelloNTimes(n);

// ****** print 1 to N 
function Print1ToN(n){
    if(n==0)
        return;

    Print1ToN(n-1);
    console.log(n);
}
// Print1ToN(n);

// ****** print N to 1;

function PrintnTo1(n){
    if(n==0)
        return;

    console.log(n);
    PrintnTo1(n-1);
}
// PrintnTo1(n);

// **** sum up to N

// let n=5;
function sumN(n){
    if(n==1)
        return 1;

    return n+sumN(n-1);
}

// console.log(s6umN(n));


// ******* 

function FactorialN(n){
    if(n<1)
        return 0;
    if(n==1){
        return 1;
    }

    return n*FactorialN(n-1);
}

// console.log(FactorialN(n));

// ************** find the gretest commman devisor GCD of two Numbers A B;

// *********  first algorithm (worst case);
// function GCD(a,b){

//     for(let i=Math.min(a,b); i>=1; i--){
//         if(a%i==0 && b%i==0){
//             console.log("->",i);
//             break;
//         }
//     }
// }
// GCD1(16,24);

function GCD1(a,b){
    
    while(a != b){
        if(a>b)
            a=a-b;
        else
            b=b-a;
    }
    console.log(`->`,a);

}
// GCD1(16,18);


// find the greatest common devisor of the two number using recursion by algorithm of the travedrsal  devide and assign the value 

function GCD2(a,b){
    if(a==b) return a;
     
    if(a>b) return GCD2(a-b,b);
    else return GCD2(a,b-a);
}
console.log(GCD2(16,18));


