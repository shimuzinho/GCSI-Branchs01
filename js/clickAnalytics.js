let clicks = 0;

const click = () => {
    clicks++;
    const saida = document.querySelector("#saidaClickes");
    saida.textContent = clicks;
}