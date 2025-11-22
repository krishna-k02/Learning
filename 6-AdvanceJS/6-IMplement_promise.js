// function placeOrder(callback){
//     console.log("Calling for Order ...");

//     setTimeout(()=>{
//         console.log("Order Place succesfully!:")
//         callback();
//     },3000)
// }
// // placeOrder()

// function prepareOrder(callback){
//     console.log("Preparing order started...");

//     setTimeout(()=>{
//         console.log("Order Prepared succesfull:!");
//         callback();
//     },3000);
// }

// // prepareOrder();

// function pickouporder(callback){
//     console.log("Deleviry boy reaching to Shop...");

//     setTimeout(() => {
//         console.log("Pickout order and delevery on the way...");
//         callback();
//     }, 3000);
// }
// // pickouporder();

// function orderReached(){
//     console.log("Order reached succefully😍");
// }

// // orderReached();

// placeOrder(()=>{
//     prepareOrder(()=>{
//         pickouporder(()=>{
//             orderReached();
//         });
//     });
// });


function marksCheck(id){
    console.log("Call to marks checker function....");
    
        let pr=new Promise((res,rej)=>{
            setTimeout(() => {
                let marks=Math.floor(Math.random()*100);
                // let marks="lsjdflsa";
                if(id==123){
                    res(marks);
                }
                else{
                    rej("ID invalid~?");
                }
            }, 2000);
        })
    return pr;
}

function gradCheck(marks){
    console.log("Grad checker function :..");
    
    let pr=new Promise((res,rej)=>{
        let grad="fail";
        setTimeout(()=>{
            if(marks==NaN){
                rej("Invalid Marks~:");
            }
            else{
                if(marks>=40){
                    grad="pass";
                    res(grad);
                }
                else res(grad)
            }
        },1000)
    })
    return pr;
}

marksCheck(123)
.then((marks)=>{
    console.log(`Marks=${marks}`);
    return gradCheck(marks);
})
.then(grad=>{
    console.log(`Grad=${grad}`);

})
.catch(error=>{
    console.log(error)
})

