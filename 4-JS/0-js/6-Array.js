let prompt=require("prompt-sync")();

let n=Number(prompt("Enter Number:"));
console.log(n);

let arr=[n];

console.log("Enter the all Element of the array");

for(let i=0; i<n; i++){
    arr[i]=Number(prompt("Enter element="+(i+1)+": "));
}
console.log(arr);

let max=arr[0];
let min=arr[0];

for(let i=0; i<n; i++){
    if(arr[i]>=max){
        max=arr[i];
    }
    if(arr[i]<=min){
        min=arr[i];
    }
}

// console.log(`Max Of Array= ${max}`)
// console.log(`Min Of Array= ${min}`)

// arr.push(100);
// console.log(arr);
