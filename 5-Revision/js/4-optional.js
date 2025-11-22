let i=0,s=0; 
function sample(n){
    while(n>0){
        r=n%10;
        p=8^i;
        s=s+p*r;
        i=i+1;
        n=Math.floor(n/10);
    }
    console.log(s);
}

sample(127);


// interger i,j,K;
// Set k=8;
// for(each i form 1 to 1)
//     for(each j from the value of i to 1)
//         print k+1;
//     end for
// end for


// Integer 

process.stdout.write("lkasjdfoisdjfh");