let prompt=require("prompt-sync")();

let n=Number(prompt("Enter Number"));
console.log(n);

// for (let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         process.stdout.write(`${j} `);
//     }
//     console.log();
// }

// for (let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(`${j} `);
//     }
//     console.log();
// }

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n-i+1; j++){
//         process.stdout.write(`${j} `);
//     }
//     console.log()
// }


// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n-i; j++){
//         process.stdout.write("  ");
//     }
//     for(let k=1; k<=i; k++){
//         process.stdout.write(` ${k}`);
//     }
//     console.log();
// }


// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n*2; j++){
//         if(i==j || i+j==n+1){
//             process.stdout.write("* ")
//         }
//         else process.stdout.write("  ")
//     }
//     console.log()
// }


for(let i=1; i<=n; i++){
    for(let j=1; j<=n*2; j++){
        if(i==j || i+j==n*2){
            process.stdout.write("* ")
        }
        else process.stdout.write("  ")
    }
    console.log()
}