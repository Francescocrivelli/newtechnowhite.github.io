"use strict";

var iW = 1169;
var iH = 970;


var photoSec = document.getElementById("photoSection");
	photoSec.style.position='absolute';
    
	
var photoArray = [
		{filename: "../image/gallery/1.png",
		 caption: "Francesco Crivelli Motivational Icon. Logo."},
		{filename: "../image/gallery/2.png",
		 caption: "Francesco athe the <i>Latinamerican Robotics Competition <i>"},
		{filename: "../image/gallery/3.png",
		 caption: "The <i>Latinamerican Robotics Competition <i> road"},
		{filename: "../image/gallery/4.jpg",
		 caption: " <i>FIRST First Robotics Competition FRC</i>, Los Angeles, California."},
		{filename: "../image/gallery/5.jpg",
		 caption: "1st Place, <i>IBM, Solar Challenge<i>"},
		{filename: "../image/gallery/6.png",
		 caption: "Francesco explaining the project of the academy of technology of the University Federico Santa Maria and picture of the ceremony (1st Place)"},
	];
	
function handleResize(){
	var w = window.innerWidth;
	var h = window.innerHeight;
	var deltaW = ((w-800)/2);
	var deltaH = ((h-600)/2);
	console.log(w);
	console.log(h);
	photoSec.style.left = deltaW+'px';
	photoSec.style.top  =  deltaH +'px';
}
var index = -1;
function chForward(){
	index++;
	if(index>photoArray.length-1){
		index = 0;
	}
	var photo = document.getElementById("photo");
	photo.src = photoArray[index].filename;
	var caption = document.getElementById("caption");
	caption.innerHTML = photoArray[index].caption;
	
}

function chBack(){
	index--;
	if(index<0){
		index = photoArray.length-1;
	}
	var photo = document.getElementById("photo");
	photo.src = photoArray[index].filename;

	var caption = document.getElementById("caption");
	caption.innerHTML = photoArray[index].caption;
}

chForward()
handleResize()
window.addEventListener("resize",handleResize,false);
