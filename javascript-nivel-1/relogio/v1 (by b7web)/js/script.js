function updateTimer() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    document.querySelectorAll(".timer")[0].innerHTML = h;
    document.querySelectorAll(".timer")[1].innerHTML = m;
    document.querySelectorAll(".timer")[2].innerHTML = s;
}