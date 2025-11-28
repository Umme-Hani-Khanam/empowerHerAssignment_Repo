function displayMessage(name) {
  console.log(`Hello, ${name}!`);
}

function getUserInput(callback) {
  setTimeout(() => {
    const username = "Alice"; 
    callback(username); 
  }, 1000);
}

// Call the function
getUserInput(displayMessage);
