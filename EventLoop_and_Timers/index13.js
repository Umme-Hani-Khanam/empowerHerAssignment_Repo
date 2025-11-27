
const loader=setInterval(()=>{
    console.log("Loading...");
},1000);
setTimeout(()=>{
    clearInterval(loader);
    console.log("Loaded Successfully!");
},5000)

