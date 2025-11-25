let age=20;//global variable
function displayAge()
{//function execution context
  console.log(age);
}
displayAge();//function call

function changeAge(){//updates age
  age=age+2;
  console.log(age);//print updated age
}
changeAge();//calls changeAge function
