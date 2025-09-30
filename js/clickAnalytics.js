let clicks = 0;

const handleClick = () => {
    clicks++;
    document.querySelector("#saidaClicks").textContent = clicks;
}