function leftRotateByOne(arr) {
    // Write your logic here
    function Reverse(arr,s,e){
        while(s<e){
            let temp=arr[s];
            arr[s]=arr[e];
            arr[e]=temp;
            s++;
            e--;
        }
    }
    
    Reverse(arr,0,arr.length-1-1);
    Reverse(arr,arr.length-1-1,arr.length-1);
    Reverse(arr,0,arr.length-1-2)
    
    return arr;
    
}

module.exports = { leftRotateByOne };




function leftRotateByOne(arr) {
    // Write your logic here
    function Reverse(arr,s,e){
        while(s<e){
            let temp=arr[s];
            arr[s]=arr[e];
            arr[e]=temp;
            s++;
            e--;
        }
    }
    
    Reverse(arr,0,0);
    Reverse(arr,1,arr.length-1);
    Reverse(arr,0,arr.length-1)
    
    return arr;
    
}

module.exports = { leftRotateByOne };