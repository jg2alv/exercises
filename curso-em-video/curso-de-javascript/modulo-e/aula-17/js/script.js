const query = (e) => document.querySelector(e);
query("button").addEventListener("click", () => {
    let number = Number(query("input").value);
    let table = query("select");
    let n = 1;
    table.innerHTML = "";
    console.log(number.lenght)
    if (number.lenght == undefined) { alert("Calculando tabuada do 1"); number = 1 }
    while (n <= 10) {
        let line = document.createElement("option");
        line.innerHTML = `${number} x ${n} = ${number * n}`;
        table.appendChild(line);
        n++
    }
});