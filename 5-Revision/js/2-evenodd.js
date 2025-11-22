/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    let even=0, odd=0;
    let n1=n;
    let bn=""
    while(n1!=0){
        if(n1%2==0){
            bn+="0 ";
        }
        else bn+="1 ";
        n1=Math.floor(n1/2);
    }
    bn=bn.split(" ");
    for(let i=0; i<bn.length; i++){
        if(bn[i]==1){
            if(i%2==0){
                even++;
            }
            else odd++;
        }
    }
    // return [even,odd]
    console.log(even,odd)
};

evenOddBit(50);