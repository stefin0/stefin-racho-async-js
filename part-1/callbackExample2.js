function printAndCallback(message, callback) {
  // After 2 seconds the "message" is printed
  // and the callback function is called.
  // "callback" calls the "callbackFunction" function which
  // logs a second message.
  setTimeout(() => {
    console.log(message);
    callback(); 
  }, 2000);
}

function callbackFunction() {
  console.log("This is the second message.");
}

printAndCallback("This is the first message.", callbackFunction);
