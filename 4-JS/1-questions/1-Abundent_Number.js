let num=1;

let sum=0;

let i=1;
while(i<=num/2){
    if(num%i == 0){
        sum=sum+i;
    }
    i++;
}
// console.log(sum);

if(sum > num) console.log(sum+" Is Abundent Number ");
else console.log(num+" Is Not Abdundent Number");