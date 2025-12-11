const loginform=document.getElementById("loginform");
loginform.addEventListener("submit",function(event){
    event.preventDefault();
const user=JSON.parse(localStorage.getItem("user"));
const email=document.getElementById("email").value;
const pass=document.getElementById("password").value;

if(user && email===user.email && pass===user.password){
    localStorage.setItem("isLoggedin","true");
    alert("login successfully");
    window.location.href="todos.html";

}
else{
    alert("invalid credentials");
}
});