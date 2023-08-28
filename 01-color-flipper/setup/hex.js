const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#"; //its let because it is going to change
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  //in each iteration its going to add a value from the array
  //starting point --> i=0, and is going to stop before i is 6, and everytime it runs its going to increment 1 (i++)
  // i < 6 because the hex value has 6 elements
  //if you only use = it is going to overwrite the code, assingn a differnt value
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
  return Math.floor(Math.random() * hex.length); //will multiply by the length of the hex array
}