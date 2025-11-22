function getData(api){
    console.log("Data Fetching....");

    return fetch(api);
}


// function dataread(data){
//     return new Promise((res,rej)=>{
//         res(data.json());
//     })
// }

// getData("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")
// .then((data)=>{
//     console.log(data);
// })

getData("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/india?unitGroup=us&key=YOUR_API_KEY&contentType=json")
.then((data)=>{
    console.log(data);
})
.catch((text)=>{
    console.log(text); 
})