// function sum(){
   
//     console.log (`su`);
//     return 0;
// }

// sum();




// //console.log(sum());

// (function() { 
    
//     console.log( "anonymous function code") 
//   })


//   console.log("mmmmmmmmmmm");
//   ();

function callbackFunction(callbackS) {
    // calling the anonymous function passed as an argument
    callbackS();
  }
  
  callbackFunction(function() {
    console.log("anonymous function code")
  });



  // Defining a function that takes a callback as an argument
function performOperation(num1, num2, callback) {
    let result = callback(num1, num2);
    console.log("The result is: " + result);
  }
  
  // Calling the function with an anonymous function as the callback
  performOperation(5, 3, function(a, b) {
    return a + b;
  });