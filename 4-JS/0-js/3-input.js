let prompt=require("prompt-sync")()
let n=prompt("Input number:")
console.log(n);

n=Number(prompt("Enter number"));
// console.log(n);

for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write("* ");
    }
    console.log();
}