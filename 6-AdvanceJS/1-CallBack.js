function greet(){
    console.log("Call to greet :");
}

function meet(){
    console.log("Call to meet Function");
}

function fnCall(callback){
    console.log("Calling From callback");
    callback();
}
//  call different function using another funciton as a callback 
// fnCall(meet);


// fetching user details using callback 

function getData(userid,callback){
    console.log("fetching data to server...");
    let id=userid;
    let data={
        name:"krishna",
        age:19,
        gender:"male",
        id:1234
    }
    callback(data,id);
}

function printUserData(data,id){
    console.log(`Fetched data of ${id} user`);
    console.log(data);
}

function printUserName(data,id){
    console.log(`Name: ${data["name"]} id:${id}`);
}
// getData(1234,printUserData);

getData(1234,printUserName);