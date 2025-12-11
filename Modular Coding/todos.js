import {displayTodos} from "./displayTodos.js";

const loggedin=localStorage.getItem("isLoggedin");
if(loggedin!=="true"){
    alert("Please Login first" );
    window.location.href="login.html";
}

async function fetchTodos(){
    try{
        let res=await fetch("https://jsonplaceholder.typicode.com/todos");
        let data=await res.json();
        displayTodos(data.slice(0,20))
    }
    catch(err){
        console.log("Error fetching todos:",err);
    }
}
fetchTodos();