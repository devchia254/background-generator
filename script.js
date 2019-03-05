var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randombtn = document.querySelector(".random");

function setBG() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
}

function gradientProperty() {
	css.textContent = body.style.background + ";";
}

function setGradient() {
	setBG();
	gradientProperty();
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
		var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    var rgb1 = "rgb(" + x + "," + y + "," + z + ")";
		var rgb2 = "rgb(" + a + "," + b + "," + c + ")";

 		// console.log(rgb1);
		// console.log(rgb2);

    body.style.background = "linear-gradient(to right, " + rgb1	+ ", " + rgb2 + ")";;

		gradientProperty();
}

setBG(); //View the pre-set inputs applied to the background on the first page load.
gradientProperty(); //View the gradient property applied of the pre-set inputs on first page load.

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randombtn.addEventListener("click", random_bg_color);
