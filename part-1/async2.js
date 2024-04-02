console.log("I should be first.");

setTimeout(() => {
  console.log("I'm delayed after 2 seconds.");
}, 2000);

console.log("I should be second");
