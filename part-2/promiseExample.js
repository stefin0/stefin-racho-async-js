fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.jso")
.then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }
    return res.json();
  })
.then(data => {
    console.log(data);
  })
.catch(err => {
    console.log(`Failed to get products: ${err}`);
  })
