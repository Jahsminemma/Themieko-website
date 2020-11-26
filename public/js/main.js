const scrollTopBtn =document.querySelector(".scroll-top .btn")
const serviceToggler=document.getElementById("service-toggle")
const dropdown = document.getElementById("dropdown");


serviceToggler.addEventListener("click", function show(){
this.classList.toggle("show")
if(serviceToggler.classList.contains("show")){
	dropdown.style.display="block"
}	
else{dropdown.style.display="none"}
})
window.onscroll = function showScrollTopBtn(){
	if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
		scrollTopBtn.style.display = "block"
	} else{
		scrollTopBtn.style.display="none"
	}
}

let scrollToTop=()=>{
	if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){ 
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	}
};






//intersection observer for onscroll animation

const slider = document.querySelectorAll(".slide-up")
const slideIn = document.querySelectorAll(".slide-in")
const slideFromRight = document.querySelectorAll(".slide-right")

options= {
	threshold : 0,
	rootMargin: "80px 0px 0px 0px"
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