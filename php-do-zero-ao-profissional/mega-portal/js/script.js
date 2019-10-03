var slideItem = 0;
window.onload = function () {
    setInterval(passarSlide, 5000);

    var slidewidth = document.getElementById("slideshow").offsetWidth;
    var objs = document.getElementsByClassName("slide");
    for (var i = 0; i < objs.length; i++) {
        objs[i].style.width = slidewidth + "px";
    }
}

function passarSlide() {
    var slidewidth = document.getElementById("slideshow").offsetWidth;

    if (slideItem >= 3) {
        slideItem = 0;
    } else {
        slideItem++;
    }

    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-" + (slidewidth * slideItem) + "px";
    document.getElementsByClassName("control")[0].style.backgroundColor ="#ccccca";
	document.getElementsByClassName("control")[1].style.backgroundColor ="#ccccca";
	document.getElementsByClassName("control")[2].style.backgroundColor ="#ccccca";
	document.getElementsByClassName("control")[3].style.backgroundColor ="#ccccca";
	document.getElementsByClassName("control")[slideItem].style.backgroundColor ="#69696b";
}

function mudarSlide(pos) {
    var slidewidth = document.getElementById("slideshow").offsetWidth;
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-" + (slidewidth * pos) + "px";
    document.getElementsByClassName("control")[0].style.backgroundColor ="#ccccca";
	document.getElementsByClassName("control")[1].style.backgroundColor ="#ccccca";
	document.getElementsByClassName("control")[2].style.backgroundColor ="#ccccca";
	document.getElementsByClassName("control")[3].style.backgroundColor ="#ccccca";
	document.getElementsByClassName("control")[pos].style.backgroundColor ="#69696b";
}

function toggleMenu() {

    var menu = document.getElementById("menu");

    if (menu.style.display == 'none' || menu.style.display == '') {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }

}