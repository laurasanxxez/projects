//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn)  { //selected all the buttons and looped over, and for each button added event listener, and using the event object (e) and targeting the classes
  btn.addEventListener("click", function(e){
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) { 
      count--; //decreasing the count by 1
    }
    else if(styles.contains("increase")){
      count++;
    } 
    else{
      count = 0;
    }
    if(count > 0) {
      value.style.color = "green";  // variable=value, property=style
   }
   if(count < 0){
    value.style.color = "red";
   }
   if(count === 0) {
    value.style.color = "#222";
   }
    value.textContent = count;
  });
});
