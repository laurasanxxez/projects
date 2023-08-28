const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
  //get random number between 0 and 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function getRandomNumber() {
  return Math.floor(Math.random()*colors.length);
  //Math.Random: getting numbers from 0 -1 but it is never going to be 1 (a whole number)
  // Math.random() * colors.length ---> multiplying the number of possible colors
  //to get it to be a whole number: Math.floor(Math.random() * 10) --->  between 0 and 10 (whole)
  }
