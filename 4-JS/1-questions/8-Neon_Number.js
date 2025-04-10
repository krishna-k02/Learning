let n=9;

let sum=0;
let sqrt=n*n;

while(sqrt){
    sum=sum+(sqrt%10);
    sqrt=Math.floor(sqrt/10);

}

if(sum == n){
    console.log(n+" Is Neon Numebar ");
}
else console.log(n+" Is Not Neon Number");