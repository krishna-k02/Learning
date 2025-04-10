let a=12, b=18;

let Adevisor=[], Bdevisor=[];

let i=1;  

let p=1;
while(i <= (a/2 || b/2)){
    if(a%i == 0){
        Adevisor.push(i);

    }
    if(b%i == 0){
        Bdevisor.push(i);
    }
    i++;
}

for (let i=(Adevisor.length)-1; i-1>=0; i--){
    let j;
    for(j=(Bdevisor.length)-1; j-1>=0; j--){
        if(Adevisor[i] == Bdevisor[j]){
            console.log(Adevisor[i]);
            break;
        }
    }
    if(Adevisor[i] == Bdevisor[j]){
        break;
    }    
}