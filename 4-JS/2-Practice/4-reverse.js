let arr=[1,2,3,4,5,6,7];

console.log(arr);

for(let i=0; i<arr.length/2;i++){
    // console.log(i);
    let temp=arr[i];
    arr[i]=arr[arr.length-i-1];
    arr[arr.length-i-1]=temp;
}


console.log(arr);
