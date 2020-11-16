const accMore = document.getElementById("read-more")
const accLess = document.getElementById("read-less")
const breakPoint = document.getElementById("break-point")
breakPoint.style.display="none"
accLess.style.display="none"

accMore.addEventListener("click",
function readMore(){
	if(breakPoint.style.display=="none"){
		breakPoint.style.display="block"
		accLess.style.display="block"
		accMore.style.display="none"
	}
	});
	
accLess.addEventListener("click", 
	function readLess(){
	if(breakPoint.style.display=="block"){
		breakPoint.style.display="none"
		accMore.style.display="block"
		accLess.style.display="none"
	}
})

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 6000;	// Time Between Switch
	 
// Image List
images[0] = "images/slider1.jpg";

images[1] = "images/img_4.jpeg";



// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}
window.onload = changeImg();
// Run function when page loads