let clicks = 0;

const handleClick = () => {
    clicks++;
    document.querySelector("#saidaClickes").textContent = `${clicks} clicks`;
}