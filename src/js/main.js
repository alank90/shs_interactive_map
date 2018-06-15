const $ = require("jquery");
const changeFloor = require("./changeFloor.js");

// DOM is ready
$(document).ready(function() {
  var currentFloor = "floor-one";

  // ============ Routine to reveal/hide elements on floor ======== //
  $(".one").on("click", "li", event => {
    const el = event.currentTarget;

    const dept = $(el).data("department");
    console.log(dept);
    $(dept).toggleClass("hidden");
  });

  // Get the Floor Layout number that was clicked and
  // call showFloorLayout to display clicked floor
  $(".floors > div").on("click", event => {
    const el = event.currentTarget;
    const newFloor = $(el).data("floor");
    console.log(newFloor);
    changeFloor(currentFloor, newFloor);
  });
}); // end dom ready
