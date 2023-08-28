const buttons = document.querySelectorAll("[data-carousel-button")

buttons.forEach(button => {
  button.addEventListener("click" ,() => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1; //next (1) or prev (-1)
    const slides = button
    .closest("[data-carousel]")
    .querySelector("[data-slides]"); //getting the closest parent element from the button
  //going from the button to the carousel and then selecting the slides
  const activeSlide = slides.querySelector("[data-active]")
  let newIndex = [...slides.children].indexOf(activeSlide) + offset; //convert the slides into an array, get the index of the active slide in the array and add the offset (negative or positive)
  //loop over  the images when it reaches the end
  if(newIndex < 0) newIndex = slides.children.length - 1; //if it is going backwards, past the image --> go to the last image
  if(newIndex >= slides.children.length) newIndex = 0; //loop back and restart

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
})
})