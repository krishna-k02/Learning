prompt=require("prompt-sync")();

let arr=[1,2,3,4,5];
// Sum of the all element of the array 

// let sum=0; 
// for(let i=0; i<arr.length; i++){
//     sum += arr[i];
// }

// console.log("sum="+sum);



// Max amd min element of the array 
// let max=arr[0];
// let min=arr[0];

// for(let i=0; i<arr.length; i++){
//     if(arr[i]>=max){
//         max=arr[i];
//     }
//     else if(arr[i]<=min){
//         min=arr[i];
//     }
// }
// console.log(`max=${max}  min=${min}`);


// find the second max and second min of the array 

// let arr=[2,4,1,6,5,3];
// let smax=arr[0],max=arr[0];
// let min=Math.min(arr[0],arr[1]);
// let smin=0

// for(let i=2; i<arr.length; i++){
//     if(arr[i]>max){
//         smax=max;
//         max=arr[i];
//     }
//     else if(arr[i]>smax && arr[i] != max){
//         smax=arr[i];
//     }

//     if(arr[i]<min){
//         smin=min;
//         min=arr[i];
//     }
//     else if(arr[i]<smin && arr[i]!=min){
//         smin=arr[i];
//     }
// }


// console.log(`max=${max}  smax=${smax}`)
// console.log(`min=${min}  smin=${smin}`)


// Reverse the array 

// let j=arr.length-1;
// for(let i=0; i<=arr.length; i++){
//     if(i<j){
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         j--;
//     }
// }
// console.log(arr);


// arrange all 0 in left and all 1 in rightn side 
// ex-- [1,0,1,1,0,0,1,0,1]  => [0,0,0,0,1,1,1,1,1]

// let arr=[1,0,1,1,0,0,1,0,1]

// let j=0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]==0){
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         j++;
//     }
// }
// console.log(arr);


// rotate the array by one element to left rotation 
// [1,2,3,4,5]  => [2,3,4,5,1]

// let temp=arr[0];

// for(let i=0; i<arr.length-1; i++){
//     arr[i]=arr[i+1];
// }

// arr[arr.length-1]=temp;
// console.log(arr);


// rotate the array by one element to right rotation 
// [1,2,3,4,5]  => [5,1,2,3,4]

// let temp=arr[arr.length-1];

// for(let i=arr.length-1; i>=1; i--){
//     arr[i]=arr[i-1];
// }

// arr[0]=temp;
// console.log(arr);


// Rotate element left to right of the array to n times n given by user;

// let n=prompt("Enter Number: ");

// for(let i=1; i<=n; i++){
//     let temp=arr[0];
//     for(let i=0; i<arr.length-1; i++){
//         arr[i]=arr[i+1];
//     }
//     arr[arr.length-1]=temp;

// }

// console.log(arr);


// Rotate element right to left of the array to n times n given by user;

// let n=Number(prompt("Enter Number: "));
// for(let i=1; i<=n; i++){

//     let temp=arr[arr.length-1];
//     for(let j=arr.length-1; j>=0; j--){
//         arr[j]=arr[j-1];
//     }
//     arr[0]=temp;
// }
// console.log(arr);

// left rotation basic optimizatioin algorithm 


// let n=Number(prompt("Enter Number: "));

// let rtemp=new Array(arr.length);
// let ltemp=new Array(arr.length);

// n=n%arr.length;
// for(let i=0; i<arr.length; i++){
//     ltemp[i]=arr[i+n]%arr.length-1;
// }
// console.log(ltemp);
    
let n=Number(prompt("Enter Number: "));
function Reverse(arr,start,end){
    while(start<end){
        let temp=arr[start];
        arr[start]=arr[end]
        arr[end]=temp;
        start++;
        end--;
    }
}

// Reverse(arr,0,n-1);
// Reverse(arr,n,arr.length-1);
// Reverse(arr,0,arr.length-1);

Reverse()
console.log(arr);