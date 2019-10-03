function addBalloon() {
    const balloon = document.createElement("div");
    balloon.setAttribute("class", "balloon");
    let browserWidth = document.getElementsByTagName("body")[0].offsetWidth;
    let browserHeight = document.getElementsByTagName("body")[0].offsetHeight;
    let p1 = Math.floor(Math.random() * browserWidth);
    let p2 = Math.floor(Math.random() * browserHeight);
    const hexMax = 256 * 256 * 256;
    let color = '#' + Math.floor(Math.random() * hexMax).toString(16).toUpperCase().padStart(6, '0');
    balloon.setAttribute("style", "top: " + p2 + "px; left: " + p1 + "px; background: " + color + ";");
    balloon.setAttribute("onclick", "removeBalloon(this)");
    document.body.appendChild(balloon);
    document.querySelector(".balloons-on-screen h2").innerHTML = document.getElementsByClassName("balloon").length;
    let created = document.querySelector(".created-balloons h2").innerHTML;
    if (created == "#") {
        document.querySelector(".created-balloons h2").innerHTML = 1;
    } else {
        document.querySelector(".created-balloons h2").innerHTML = parseInt(document.querySelector(".created-balloons h2").innerHTML) + 1;
    }
}

function removeBalloon(balloon) {
    document.body.removeChild(balloon);
    let popped = document.querySelector(".popped-balloons h2").innerHTML;
    if (popped == "#") {
        document.querySelector(".popped-balloons h2").innerHTML = 1;
    } else {
        document.querySelector(".popped-balloons h2").innerHTML = parseInt(document.querySelector(".popped-balloons h2").innerHTML) + 1;
    }
}

function blowEmAll() {
    let balloons = document.getElementsByClassName("balloon");
    for (i=0; i < balloons.length; i++) {
        document.body.removeChild(balloons[i])
    }
    document.querySelector(".created-balloons h2").innerHTML = "#"
    document.querySelector(".balloons-on-screen h2").innerHTML = "#"
}