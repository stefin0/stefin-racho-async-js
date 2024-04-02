const worker = new Worker("./worker.js");

worker.postMessage("Begin");

worker.addEventListener("message", message => {
  console.log(`${message} recieved from worker.`)
})
