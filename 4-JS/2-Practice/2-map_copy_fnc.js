// let arr=[1,2,3,4,5,6];

// function nmap(arr1,fnc) {
//     let newarr=new Array();
//     for(let i=0; i<arr1.length; i++){
//         newarr.push(fnc(arr1[i]))
//     }

//     return newarr;
// }

// let ans=nmap(arr,function(value){return value*2});

// console.log(ans);

let arr=[1,2,3,4,5,6];

function new_map(arr, fnc){
    let ansarr=new Array();
    for(let i=0; i<arr.length; i++){
        ansarr.push(fnc(arr[i]));
    }
    return ansarr;
}

let result=new_map(arr,function(value){
    return value*5;
})

console.log("hello result of the calculated darry:")
console.log(result);