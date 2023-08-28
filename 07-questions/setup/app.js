//using selectors inside the element (select the questions). selecting specific things whithin that selection

const questions = document.querySelectorAll(".question");//you are lokking for "question" inside "questions"

questions.forEach(function(question) { // the "question" references the article
/* console.log(question); */
const btn = question.querySelector(".question-btn"); // and "question-btn" is accessing withing the article
//if you type "document" you will be selecting all the buttons. with "questions" you are being more specific
/* console.log(btn); */

btn.addEventListener("click", function() { //closing one if you click on the other
  questions.forEach(function(item) { //referencing every item (question=article)
    if(item !== question) { //if the item doesnt match the question/article i cliked on, it will remove the text
      item.classList.remove("show-text");
    }
  });

  question.classList.toggle("show-text"); //when i click on the button i will target the parent directly and toggle it
})
});



// traversing the dom (selected the buttons and then started looking for the parent elements)
/* 
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.
    parentElement;
    //event object + current target (button) + access parent element (title)  + access parent element (question article)
    question.classList.toggle("show-text"); //toggle method
  });
  //each time you click on a button you will either add or remove the "show text" class from the article
}); */
