function toggleMenu() {
    let menuWidth = document.getElementById("menu-area").style.width;
    if (menuWidth == "200px") {
        document.getElementById("menu-area").style.width = "0px";
    } else {
        document.getElementById("menu-area").style.width = "200px";
    }
}