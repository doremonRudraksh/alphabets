// Create a reference for the canvas
canvas =  document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown );

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
		//write a code to check the type of key pressed
		aplhabetkey();
		document.getElementById("d1").innerHTML = "You Pressed a Alphabet key";
		console.log("Alphabet Key");
		}
		else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("Other key");
	}

		if(keyPressed >= 48 && keyPressed <= 57){
			numberkey();
			document.getElementById("d1").innerHTML = "You pressed a number key";
			console.log("Number key");
		}

		if(keyPressed >= 37 && keyPressed <= 40){
			arrowkey();;
			document.getElementById("d1").innerHTML="You pressed a  arrow key";
			console.log("Arrow key");
		}

		if(keyPressed == 17){
			specialkey();
			document.getElementById("d1").innerHTML="You pressed special key";
			console.log("Special key");
		}

		if(keyPressed == 18){
			specialkey();
			document.getElementById("d1").innerHTML="You pressed special key";
			console.log("Special key");
		}

		if(keyPressed == 27){
			specialkey();
			document.getElementById("d1").innerHTML="You pressed special key";
			console.log("Special key");
		}
}

function aplhabetkey()
{
	//upload respective image with the message. 
	img_image = "alpkey.png";
	add();

}
function numberkey()
{
	img_image = "numkey.png";
	add();
}
function arrowkey()
{
	img_image = "Arrkey.png";
	add();
}
function specialkey()
{
	img_image = "spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
