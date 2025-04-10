let num=6;

let num1=num, sum=0;

while(num){
    sum=sum+(num%10);
    num=Math.floor(num/10);
}

if(num1%sum == 0){
    console.log("Harshed Number="+num1);
}
else console.log("Not Harshed Number")