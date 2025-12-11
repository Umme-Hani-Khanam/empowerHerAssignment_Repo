export function displayTodos(data){
    const container=document.getElementById("todo-container");

    container.innerHTML="";
    
    data.forEach(todo=>{
        const div=document.createElement("div");
        div.style.border="1px solid gray";
        div.style.margin="5px";
        div.style.padding="10px";
        div.innerHTML=`<h4>${todo.title}</h4>
        <p>Status: ${todo.completed?"Completed":"Pending"}</p>`;
        container.appendChild(div);

    });
}