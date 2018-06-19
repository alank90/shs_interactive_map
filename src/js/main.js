const $ = require("jquery");
const changeFloor = require("./changeFloor.js");

// DOM is ready
$(document).ready(function() {
  var currentFloor = "floor-one";

  // ============ Routine to reveal/hide elements on floor ======== //
  $("ul").on("click", "li", event => {
    const EL = event.currentTarget;

    let newFloor = $(EL)
      .parents(":eq(1)")
      .data("floor"); // Grandparent div data-floor value

    /* Right here need to check if li element floor that was 
       clicked on is equal to currentFloor. If not we then need 
       to call changeFloor method to clear out layout and change
       currentFloor.
        */
    if (currentFloor !== newFloor) {
      currentFloor = changeFloor(currentFloor, newFloor);
      console.log("The New Current floor is " + currentFloor);
    }

    // Add dept to onscreen layout
    const DEPT = $(EL).data("department");
    console.log(`The clicked DEPT is ${DEPT}`);
    $(DEPT).toggleClass("hidden");

    // Toggle the text color for choosen item 
    let menuItemChoosen = DEPT.substring(1);
    $(EL).toggleClass(menuItemChoosen);
  });
}); // end dom ready
