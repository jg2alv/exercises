const query = (e) => document.querySelector(e);
query("button").addEventListener("click", () => {
    let start = Number(query("#start").value);
    let end = Number(query("#end").value);
    let step = Number(query("#step").value);
    if (start == "" || end == "" || step == "") {
        alert("[ERRO] Dados incorretos");
    } else {
        query("div:last-of-type p").innerHTML = "";
        for (i = start; i <= end; i += step) {
            if (i == end) {
                query("div:last-of-type p").innerHTML += `${i} \u{1F3C1}`;
            } else {
                query("div:last-of-type p").innerHTML += `${i} \u{1F449}`;
            }
        }
    }
})