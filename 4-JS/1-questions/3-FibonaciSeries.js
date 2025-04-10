let a=0, b=1, sum=0;

let num=10;

console.log(a);
for (let i=0; i<=num; i++){
    sum=a+b;
    a=b;
    b=sum;
    console.log(sum);
}

