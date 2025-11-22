function placeOrder(callback){
    console.log("Calling for Order ...");

    setTimeout(()=>{
        console.log("Order Place succesfully!:")
        callback();
    },3000)
}
// placeOrder()

function prepareOrder(callback){
    console.log("Preparing order started...");

    setTimeout(()=>{
        console.log("Order Prepared succesfull:!");
        callback();
    },3000);
}

// prepareOrder();

function pickouporder(callback){
    console.log("Deleviry boy reaching to Shop...");

    setTimeout(() => {
        console.log("Pickout order and delevery on the way...");
        callback();
    }, 3000);
}
// pickouporder();

function orderReached(){
    console.log("Order reached succefully😍")
}

// orderReached();

placeOrder(()=>{
    prepareOrder(()=>{
        pickouporder(()=>{
            orderReached();
        });
    });
});