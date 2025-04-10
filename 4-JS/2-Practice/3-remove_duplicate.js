// let arr=[1,2,4,3,3,5,6,3,2,3,5,4,6,6];
let arr=[5,3,6,3,2,1,5,6,8,6,5,1,4];
// console.log(arr);

// Set(); 
// using set remove all duplicete value from array to store in another array

// spred operator[...]
// using spred operator access all elements of the array one by one and store in array form as a array coppy 

let arr2=[...new Set(arr)];
// console.log(arr2)


// sorting ->>>>>


arr.sort(function(a,b){
    return a-b;    //assending order
    // return b-a ;    //desending order

});

// console.log(sort_arr);

// let a=prompt();
// console.log(a);

// alert("your are sure you age is 18")
// confirm("your are sure you age is 18")
// confirm("")

let a=10;
console.log(a);

let b=++a;
console.log(a);
console.log(b);