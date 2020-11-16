
serviceToggler=document.getElementById("service-toggle")
dropdown = document.getElementById("dropdown")

serviceToggler.addEventListener("click", function show(){
this.classList.toggle("show")
if(serviceToggler.classList.contains("show")){
	dropdown.style.display="block"
}	
else{dropdown.style.display="none"}
})





//intersection observer for onscroll animation

const slider = document.querySelectorAll(".slide-up")
const slideIn = document.querySelectorAll(".slide-in")
const slideFromRight = document.querySelectorAll(".slide-right")

options= {
	threshold : 0,
	rootMargin: "0px 0px 140px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
entries.forEach(entry =>{
	if(!entry.isIntersecting){
		return;
	}
	else{
		entry.target.classList.add('appear')
		entry.target.classList.add('appear2')
		entry.target.classList.add('appear3')
		appearOnScroll.unobserve(entry.target)
	}
})
}, options);
 
slider.forEach(slide=>{
	appearOnScroll.observe(slide)
})

slideIn.forEach(slidein =>{
	appearOnScroll.observe(slidein)
})

slideFromRight.forEach(slideRight =>{
	appearOnScroll.observe(slideRight)
})