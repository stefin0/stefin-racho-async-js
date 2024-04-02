function processInput(input, callback) {
  const processedInput = input.toUpperCase();
  // "callback" is called after processing the input.
  // It then calls the logResult function with the
  // processed input as our input.
  callback(processedInput);
}

function logResult(result) {
  console.log("Processed Input:", result);
}

processInput("test", logResult);
