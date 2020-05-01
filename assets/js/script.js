//CALIFORNIA

const track1 = document.querySelector('.carousel-track1');
const slides1 = Array.from(track1.children);
const nextButton1 = document.querySelector('#button-next1');
const prevButton1 = document.querySelector('#button-previous1');


const slideWidth1 = slides1[0].getBoundingClientRect().width;


//arrange the slides next to one another

// slides1[0].style.left= slideWidth1 * 0 + 'px';
// slides1[1].style.left= slideWidth1 * 1 + 'px';
// slides1[2].style.left= slideWidth1 * 2 + 'px';

const setSlidePosition1 = (slides1,index) => {
	slides1.style.left = slideWidth1 * index + 'px';
}

slides1.forEach(setSlidePosition1);


const moveToSlide1 = (track1, currentSlide1, targetSlide1) => {
	track1.style.transform = 'translateX( -' + targetSlide1.style.left + ')';
	currentSlide1.classList.remove('current-slide');
	targetSlide1.classList.add('current-slide');
}

// when I click left, move slides to the left
prevButton1.addEventListener('click', e => {
	const currentSlide1 = track1.querySelector('.current-slide');
	const prevSlide1 = currentSlide1.previousElementSibling;

	moveToSlide1(track1, currentSlide1, prevSlide1);
})


// when I click right, move slides to the right
nextButton1.addEventListener('click', e => {
	const currentSlide1 = track1.querySelector('.current-slide');
	const nextSlide1 = currentSlide1.nextElementSibling;

	moveToSlide1 (track1, currentSlide1, nextSlide1);

})



// CHINA

const track2 = document.querySelector('.carousel-track2');
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector('#button-next2');
const prevButton2 = document.querySelector('#button-previous2');


const slideWidth2 = slides1[0].getBoundingClientRect().width;


//arrange the slides next to one another

// slides1[0].style.left= slideWidth1 * 0 + 'px';
// slides1[1].style.left= slideWidth1 * 1 + 'px';
// slides1[2].style.left= slideWidth1 * 2 + 'px';

const setSlidePosition2 = (slides2,index) => {
	slides2.style.left = slideWidth2 * index + 'px';
}

slides2.forEach(setSlidePosition2);


const moveToSlide2 = (track2, currentSlide2, targetSlide2) => {
	track2.style.transform = 'translateX( -' + targetSlide2.style.left + ')';
	currentSlide2.classList.remove('current-slide2');
	targetSlide2.classList.add('current-slide2');
}

// when I click left, move slides to the left
prevButton2.addEventListener('click', e => {
	const currentSlide2 = track2.querySelector('.current-slide2');
	const prevSlide2 = currentSlide2.previousElementSibling;

	moveToSlide2(track2, currentSlide2, prevSlide2);
})


// when I click right, move slides to the right
nextButton2.addEventListener('click', e => {
	const currentSlide2 = track2.querySelector('.current-slide2');
	const nextSlide2 = currentSlide2.nextElementSibling;

	moveToSlide2 (track2, currentSlide2, nextSlide2);

})


// Carousel Tutorial 
// Part 1: https://www.youtube.com/watch?v=VYsVOamdB0g
// Part 2: https://www.youtube.com/watch?v=gBzsE0oieio&t=2146s