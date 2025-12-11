const form=document.getElementById("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const user={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    };
    localStorage.setItem("user",JSON.stringify(user));
    alert("signup successfull");
    window.location.href="login.html";
});