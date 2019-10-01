function addBallon() {
    const ballon = document.createElement("div");
    ballon.setAttribute("class", "ballon");
    var browserWidth = document.getElementsByTagName("body")[0].offsetWidth;
    var browserHeight = document.getElementsByTagName("body")[0].offsetHeight;
    p1 = Math.floor(Math.random() * browserWidth);
    p2 = Math.floor(Math.random() * browserHeight);
    const hexMax = 256 * 256 * 256;
    var color = '#' + Math.floor(Math.random() * hexMax).toString(16).toUpperCase().padStart(6, '0');
    ballon.setAttribute("style", "top: " + p2 + "px; left: " + p1 + "px; background: " + color + ";");
    ballon.setAttribute("onclick", "removeBallon(this)");
    document.body.appendChild(ballon);
}

function removeBallon(ballon) {
    document.body.removeChild(ballon);
}