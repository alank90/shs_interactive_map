const $ = require("jquery");
const CHANGEFLOOR = (currentFloor, newFloor) => {
  console.log("currentFloor " + currentFloor);
  console.log("newFloor " + newFloor);

  $(`#${currentFloor}`).addClass("hidden"); // // Hide Currently Displayed Floor in DOM
  let siblings = $(`#${currentFloor}`).siblings();
  console.log("Siblings are " + siblings);

  // $(`#${currentFloor}`).siblings().addClass("hidden"); // // Hide all currently displayed departments in DOM
  $(`#${newFloor}`).removeClass("hidden"); // Reveal newFloor
  return newFloor; // Return newFloor to become currentFllor
};

module.exports = CHANGEFLOOR;
