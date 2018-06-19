const $ = require("jquery");


const CHANGEFLOOR = (currentFloor, newFloor) => {
  
  $(`#${currentFloor}`).addClass("hidden"); // // Hide Currently Displayed Floor in DOM
  let siblings = $(`#${currentFloor}`).siblings(); //Get siblings of div#floor-* 
  
  $(`#${currentFloor}`)
    .siblings()
    .addClass("hidden"); // Hide all currently displayed departments in DOM
  $(`#${newFloor}`).removeClass("hidden"); // Reveal newFloor
  return newFloor; // Return newFloor to become currentFloor
};

module.exports = CHANGEFLOOR;
