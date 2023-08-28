//menu array
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }, 
];

//target section center because that is where all thr items are
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container"); //targeting the div "btn-container"


//load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
 
}); //iterate in my menu array and only return an especific category; we target the buttons after they have been dynamically added to the dom


function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) { //iterate over the array we will pass in the function
    /* console.log(item); */

    return `<article class="menu-item">
   <img src=${item.img} class="photo" alt=${item.title}>
  <div class="item-info">
   <header>
     <h4>${item.title}</h4>
     <h4 class=${item.price}>$15</h4>
   </header>
   <p class="item-text">${item.desc}</p>
  </div>
 </article>`;
    /*Return statement is used to terminate the execution of the function in a program.
      Function can return values in two forms that are in primitive values and object types.
       Without a return statement you can't fetch the value from the function it will return undefined. */
  });
  displayMenu = displayMenu.join(""); //join= joins in one string
  sectionCenter.innerHTML = displayMenu; //add it as our data. sectionCenter = our parent, displayMneu = data we are getting back 
}


function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) { //values= references the array than im returning; item= references each and every item
      if (!values.includes(item.category)) { //if the values does not (!) include the item category (which is property on each item) include it to the array
        values.push(item.category);
      }
      return values; //when we use reduce we always need to return the values
    }, ['all'] //if the item is already included just show the array
  ); //will return an array as a string of all; two parameters: acummulater and current
  const categoryBtns = categories.map(function (category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}
    </button>`
  }).join(""); //joins in one string;
  container.innerHTML = categoryBtns; //adding categoryBtns to the div "btn-container"
  const filterBtns = container.querySelectorAll(".filter-btn"); // adding the buttons dynamically instead of adding it to the html and then targeting them
  //filters
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id; //dataset = on the element we can add an atribute with a data (ex:data-id) prefix; accessing especific value using the dataset property and return the object
      const menuCategory = menu.filter(function (menuItem) { //menuCategory = manu (array)
        if (menuItem.category === category) { //if that matches my variable value
          return menuItem; //what is in the category is the data-id, which you can access using data set and then assign it to category
        }
      });
      /* console.log(menuCategory); */
      if (category === "all") {
        displayMenuItems(menu)
      }
      else {
        displayMenuItems(menuCategory);
      }

    }); //you can filter the array depending what value it is in my category
  });
}
//if you added something dynamicly you can only access it once it has alreay been added to the dom

/* for the map function:
we looped over the array (returned a new setup,
added string with html syntax,
 dinamicly populated it)
joined everything together
placed it in the sectionCenter (which is the parent),
 used innerHTML and set it equal to the displayMenu
*/

//you need to iterate over itemns and decide what you want to return
//if you used the filter = put the functionality in a function and then pass in the array