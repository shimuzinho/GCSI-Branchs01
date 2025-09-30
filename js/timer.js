let seconds = 0;

setInterval(() => {
    seconds++;
    document.querySelector("#timer").textContent = `${seconds} seconds`;
}, 1000);