
let a="hello"

if(a){ 
    console.log("hello");
}

let str=new String();

str="kasjdhfk;";
console.log(str.length)

console.log(Math.pow(2,3));

let num=2334;
let rem=1;
let rev=0;
while(num>0){
    rem=num%10;
    rev=(rev*10)+rem;
    num=Math.floor(num/10);
    // num=num/10;
}
console.log(rev);

let num1=875;
if(num1%10 == (num1*num1)%10){
    console.log("Automorphic Number.");
}
else console.log("Not Automorphic Number.")

