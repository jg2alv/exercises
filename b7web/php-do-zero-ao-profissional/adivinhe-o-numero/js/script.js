function check() {
    var randValue = document.getElementsByTagName("div")[0].getAttribute("data-randnum");
    var chosenValue = document.getElementsByTagName("input")[0].value;
    if (randValue == chosenValue) {
        alert("Bingo!");
    } else {
        alert("Try again champ!\nThe randomized number was: " + randValue);
    }
    restart();
}

function restart() {
    var randValue = Math.floor((Math.random() * 100) + 1);
    document.getElementsByTagName("div")[0].setAttribute("data-randnum", randValue);
    document.getElementsByTagName("input")[0].value = "";
}

function submit(keyCode) {
    if (keyCode === 13) {
        check();
    }
}