// let num=0471958697;
let num=471958697;
let num1=num;

let i=1;
let sum=0;
while(num){
    sum=sum+(num%10)*i;
    i++;
    num=Math.floor(num/10);
}

if(sum%11 == 0){
    console.log("ISBN Number "+num1);
}
else console.log("Not ISBN Number "+num1)