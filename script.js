// Enables strict mode to catch common coding errors and enforce better practices

"use strict";

// Selects all elements with the class "show-popup"

const buttons = document.querySelectorAll(".show-popup");

// Selects the element with the class "popup"

const Popus = document.querySelector(".popup");

// Selects the element with the class "close-popup"

const close_pop = document.querySelector(".close-popup");

// Selects the element with the class "overlay"

const overlay = document.querySelector(".overlay");

// Loops through each button in the "buttons" NodeList------------

for (let i = 0; i < buttons.length; i++) {

    // Adds a click event listener to each button
    
    buttons[i].addEventListener("click", function () {
      
    // Removes the "hidden" class from the popup to make it visible

    Popus.classList.remove("hidden");

    // Removes the "hidden" class from the overlay to make it visible

    overlay.classList.remove("hidden");
  });
}

// Defines a function to close the popup and overlay------------

const close_popup = function () {
  // Adds the "hidden" class to the popup to hide it

  Popus.classList.add("hidden");

  // Adds the "hidden" class to the overlay to hide it

  overlay.classList.add("hidden");
};

// Adds a click event listener to the close button

close_pop.addEventListener("click", close_popup);

// Adds a click event listener to the overlay

overlay.addEventListener("click", close_popup);

// Adds an event listener for the "keydown" event on the document------------

document.addEventListener("keydown", function (e) {

  // Checks if the pressed key is "Escape" and the popup is visible

  if (e.key === "Escape" && !Popus.classList.contains("hidden")) {
    // Calls the function to close the popup and overlay

    close_popup();
  }
});
