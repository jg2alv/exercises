function updateTimer() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    h = ('0' + h).slice(-2);
    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    let bgColor = "#" + h + m + s
    document.body.style.background = bgColor;
    document.querySelectorAll(".timer")[0].innerHTML = h;
    document.querySelectorAll(".timer")[1].innerHTML = m;
    document.querySelectorAll(".timer")[2].innerHTML = s;
}