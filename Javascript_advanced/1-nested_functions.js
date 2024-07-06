// Define globalVariable outside any function scope
let globalVariable = "Welcome";

function outer() {
  // Function outer
  console.log(globalVariable); // Logs: Welcome
  
  let course = "Holberton";
  
  function inner() {
    // Function inner
    console.log(globalVariable + " " + course); // Logs: Welcome Holberton
    
    let exclamation = "!";
    
    function inception() {
      // Function inception
      console.log(globalVariable + " " + course + exclamation); // Logs: Welcome Holberton!
    }
    
    inception(); // Call inception function
  }
  
  inner(); // Call inner function
}

// Call outer function in the main code (outside any function)
outer();