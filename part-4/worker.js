addEventListener("message", (message) => {
  if (message.data.command === "Begin") {
    let count = 0;
    for (let i = 0; i < 100000000; i++) {
      count += i;
    }

    postMessage(count);
  }
});
