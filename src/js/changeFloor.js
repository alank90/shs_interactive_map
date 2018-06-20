const $ = require("jquery");

const CHANGEFLOOR = (currentFloor, newFloor) => {
 
  $(`#${currentFloor}`).addClass("hidden"); // // Hide Currently Displayed Floor in DOM
  let siblings = $(`#${currentFloor}`).siblings(); //Get siblings of div#floor-* i.e. clear layout

  $(`#${currentFloor}`)
    .siblings()
    .addClass("hidden"); // Hide all currently displayed departments in DOM

  $(`#${newFloor}`).removeClass("hidden"); // Reveal newFloor

  // Reset text color to black for any currentFLoor div li elements that are selected
  $("div[data-floor=" + currentFloor + "] li").removeClass();

  return newFloor; // Return newFloor to become currentFloor
};

module.exports = CHANGEFLOOR;
