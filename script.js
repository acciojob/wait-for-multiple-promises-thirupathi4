const output = document.getElementById("output");

// 1️⃣ Show loading message with an ID (important for tests)
output.innerHTML = `
  <tr id="loading">
    <td colspan="2">Loading...</td>
  </tr>`;

// 2️⃣ Function to create a promise with random delay (1–3 seconds)
function createPromise(index) {
  const delay = (Math.random() * 2 + 1).toFixed(3);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Number(delay));
    }, delay * 1000);
  });
}

// 3️⃣ Create all 3 promises
const promises = [createPromise(1), createPromise(2), createPromise(3)];

// 4️⃣ Start timer to measure total duration
const startTime = performance.now();

// 5️⃣ Wait for all promises to resolve
Promise.all(promises).then((times) => {
  const endTime = performance.now();
  const totalTime = ((endTime - startTime) / 1000).toFixed(3);

  // 6️⃣ Remove "Loading..." row
  output.innerHTML = "";

  // 7️⃣ Add rows for each promise
  times.forEach((time, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>Promise ${i + 1}</td><td>${time}</td>`;
    output.appendChild(row);
  });

  // 8️⃣ Add total time row
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
  output.appendChild(totalRow);
});
