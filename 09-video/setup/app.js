// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function() {
  if(!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause(); //to controle the video = access the variable, if the button does not have the slide, it will add the function that pauses the video
  }
  else{
    btn.classList.remove("slide");
    video.play();
  }
});

//preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load",function(){
  preloader.classList.add("hide-preloader");
}); //when the video is loading, you will add the peloader to the load function, and do the opposite when the page loads