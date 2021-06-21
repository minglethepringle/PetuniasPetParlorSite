// Set jumbotron height to fill screen
var navbarHeight = document.getElementsByClassName("navbar")[0].offsetHeight;
document.getElementsByClassName("jumbotron")[0].setAttribute("style", `height: calc(100vh - ${navbarHeight}px)`);