// async and await allow you to write code that
// looks like synchronous code.
async function fetchData() {
  try {
    const res = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

    if (!res.ok){
      throw new Error("Network Error");
    }

    const data = await res.json();
    console.log(data);
  } catch(err) {
    console.log(`There was an Error: ${err}`);
  }
}

fetchData();

// async keyword makes the function an asynchronous function.
// fetchData() returns a promise.
// await, used inside the function, is used before async functions to 
// wait for it to be resolved, assigning value to "res".
// try/catch allow you to catch error.
