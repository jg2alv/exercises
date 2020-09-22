const time = new Date().getHours();
const query = (selector) => document.querySelector(selector);
query("section div:first-child p").innerHTML = `Agora são ${time} horas.`;
if (time >= 0 && time < 12) {
    query("section img").src = "img/morning.png";
    query("body").style.background = "#e2cd9f";
} else if (time >= 12 && time < 18) {
    query("section img").src = "img/afternoon.png";
    query("body").style.background = "#b9846f";
} else {
    document.querySelector("section img").src = "img/evening.png";
    query("body").style.background = "#515154";
}