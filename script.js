//your JS code here. If required.
const output=document.getElementById("output");
output.innerHTML = `
  <tr>
    <td colspan="2" class="text-center fw-bold">Loading...</td>
  </tr>
`;


function createPromise(id){
	const delay = (Math.random() * 2 + 1).toFixed(3); 
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(Number(delay));
		},delay*1000)
		
	});
}
const promises=[createPromise(1),createPromise(2),createPromise(3)];
const startTime = performance.now();
// 6️⃣ We note the time before starting the promises. 
// This helps us calculate how long all promises take in total.

Promise.all(promises).then((times) => {
  // 7️⃣ Promise.all waits until **all 3 promises** are done.
  // Once they all resolve, this function runs.
  
  const endTime = performance.now(); 
  // 8️⃣ Record time when all promises finished.

  const totalTime = ((endTime - startTime) / 1000).toFixed(3);
  // 9️⃣ Calculate how long it took in total (in seconds).

  output.innerHTML = ""; 
  // 🔟 Clear out the "Loading..." message from the table.

  times.forEach((time, i) => {
    // 11️⃣ For each resolved promise, add a row to the table.
    const row = document.createElement("tr");
    row.innerHTML = `<td>Promise ${i + 1}</td><td>${time}</td>`;
    output.appendChild(row);
  });

  const totalRow = document.createElement("tr");
  // 12️⃣ Add the total time row.
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
  output.appendChild(totalRow);
});
