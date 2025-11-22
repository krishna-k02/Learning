function orderFood(id){
    console.log("Order in pending....");

    return new Promise((resolve,reject)=>{
        if(id==1234){
            setTimeout(() => {
                console.log("Order Successfull !");
            resolve({food:"pizza", prise:120, type:"vege"});
            }, 2000);
        }
        else{
            console.log("Order failed!");
            reject("Wrong order id ?");
        }
    })
}

function responce(data){
    console.log(data);
}

// orderFood(234)
// .then(responce)
// .catch(responce);


// chained promise (user -> post -> comments)

function getUser(name){
    console.log("Fetching user Details...")
    return new Promise((res,rej)=>{
        if(name=="krishna-k02"){
            setTimeout(() => {
                console.log("Data Fetched successfully");
                res({name:"krishna",age:19,id:1234, gender:"male",postId:"krishna123"});
            }, 2000);
        }
        else{
            rej("User Not found (error?)");
        }
    })
}
function getPost(data){
    return new Promise((res,rej)=>{
        console.log(data);
        if(data.id==1234) {
            setTimeout(() => {
                console.log(["title1","title2"]);
                res(data);
            }, 2000);
        }
        else rej("User id is wrong of post");
    })
}

function getComments(data){
    return new Promise((res,rej)=>{
        if(data.postId=="krishna123"){
            setTimeout(() => {
                console.log(["good post","amazing post","very nice"]);
                res("done =>");
            }, 2000);
        }
        else rej("post id error");
    })
}


getUser("krishna-k02")
.then((data)=>{
    return getPost(data);
})
.then(getComments)
.catch((data)=>{
    console.log(data);
})







// function data(){
//     return new Promise((res,rej)=>{
//         res("resolve");
//     })
// }
// data()
// .then(function(d){
//     console.log(d);
// })