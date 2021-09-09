// Select add to cart button
let atcBtn = document.querySelector(".add-to-cart");

// Product Personalizer Custom Event Function
function pplrCustomEvent() {
  // Createing the custom event
  const pplrCompleted = new 
  CustomEvent("pplrCompleted", {
    detail: {
      pplrComepleted: true,
    }
  });
  // Dispatch the event to window object, You can dispatch it anywhere you want
  window.dispatchEvent(pplrCompleted);
}

// Call the custom event after user click on add to cart
atcBtn.addEventListener("click", function(e){
  e.preventDefault();
  console.log("atc was clicked");
  // custom event
  pplrCustomEvent();
});


// Finally others can listen for the event like this
window.addEventListener('pplrCompleted' , function(e) {
  console.log(e.detail);
})