// Creating a promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulating an API call
    setTimeout(() => {
      const data = { id: 1, name: "Product" };
      const success = true;

      if (success) {
        resolve(data); // Fulfilled with data
      } else {
        reject(new Error("Failed to fetch data")); // Rejected with error
      }
    }, 1000);
  });
};

// Using a promise
console.log("Fetching data...");

fetchData()
  .then((data) => {
    console.log("Data received:", data);
    return data.id; // Return value is passed to the next .then()
  })
  .then((id) => {
    console.log("Processing ID:", id);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Operation completed (success or failure)");
  });

console.log("Continuing execution while fetch happens in background");
