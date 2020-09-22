const query = (e) => document.querySelector(e);
let total = [];
let input;
query("#add").addEventListener("click", () => {
    input = Number(query("input").value);
    if (total.indexOf(input) != -1 || input > 100 || input < 1 || input == undefined || input.length == 0) {
        alert("Número inválido ou repetido!");
        query("input").value = "";
    } else {
        total.push(input);
        query("select").innerHTML += `<option>Valor ${input} adicionado!</option>`;
        query("input").value = "";
        query("div:last-of-type").innerHTML = "";
    }
});
query("#end").addEventListener("click", () => {
    if (total.length >= 1) {
        query("div:last-of-type").innerHTML = "";
        query("div:last-of-type").innerHTML += `<p>Ao todo, temos ${total.length} números cadastrados.`;
        query("div:last-of-type").innerHTML += `<p>O maior valor informado foi ${Math.max(...total)}.</p>`;
        query("div:last-of-type").innerHTML += `<p>O menor valor informado foi ${Math.min(...total)}.</p>`;
        query("div:last-of-type").innerHTML += `<p>Somando todos os valores, temos ${total.reduce((a, b) => a + b, 0)}.</p>`;
        query("div:last-of-type").innerHTML += `<p>A média dos valores digitados é ${(total.reduce((a, b) => a + b, 0) / total.length)}.</p>`;
    } else {
        alert("Adicione algum número primeiro!");
    }
});