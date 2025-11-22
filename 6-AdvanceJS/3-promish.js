// let prompt=require("primpt-sync")();
function getData(id){
    let obj={
        name:"krishna",
        age:19,
        id:1234
    }

    return new Promise((res,rej)=>{
        if(id==1234){
            console.log("Data fetched ..");
            res(obj);
        }
        else
            rej("user id is wrong ..!");
    })
    
    
}
function meet(ms){
    console.log(ms);
}

function printData(data){
    // console.log(data);
    return new Promise((res,rej)=>{
        if(data==null)
            rej("data file is Empty..!");
        else
            res(data);
    })
}

// getData().then((data)=>{
//     printData(data);
// });


getData(1234)
.then(printData)
.then(meet)
.catch(meet)