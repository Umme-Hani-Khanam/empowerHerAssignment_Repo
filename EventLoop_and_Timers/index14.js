console.log("Begin");
setTimeout(()=>
{
    console.log("Timeout Task")
},4000);//causes 4 second delay
Promise.resolve().then(()=>{
    console.log("Promise Task");
},1000);//allows end to be printed before promise,because of delay
console.log("End");