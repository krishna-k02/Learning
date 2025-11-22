function  data(key){
    return fetch(key)
  
}

function tostr(obj){
    return JSON.stringify(obj);
}


// data(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`)

// data(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=demo`)

data(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=demo`)



.then(text=>{
    return new Promise((res,rej)=>{
        res(text.json());
    })
})
.then(a=>{
    console.log(a);
    let div=document.querySelector(".box");
    let b=JSON.stringify(a);
    div.innerHTML=b;
})

