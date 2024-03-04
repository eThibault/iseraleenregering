const daysCounter = document.getElementById("days-counter");

// Replace "100" with the actual number of days as of today
let daysWithoutGovernment = 100;

daysCounter.textContent = daysWithoutGovernment;

// Update the counter every day (24 hours)
setInterval(() => {
  daysWithoutGovernment++;
  daysCounter.textContent = daysWithoutGovernment;
}, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
