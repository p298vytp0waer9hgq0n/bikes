const surfTitleContainer = document.querySelector('.surface__title-container');
const surfTitles = Array.from(surfTitleContainer.children);
const surfSlideContainer = document.querySelector('.surface__container');
const surfSlides = Array.from(surfSlideContainer.children);
const slideWidth = surfSlides[0].getBoundingClientRect().width;
console.log(slideWidth);