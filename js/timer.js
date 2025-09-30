let seconds = 0;

setInterval(() => {
    seconds++;
    document.querySelector("#timer").textContent = `${seconds} segunds`;
}, 1000);