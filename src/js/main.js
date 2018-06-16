const $ = require("jquery");
const changeFloor = require("./changeFloor.js");

// DOM is ready
$(document).ready(function() {
  var currentFloor = "floor-one";

  // ============ Routine to reveal/hide elements on floor ======== //
  $("ul").on("click", "li", event => {
    const EL = event.currentTarget;
    console.log("this EL " + EL);
    const _this = $(this);
    console.log("_this is " + _this);
    let grandparent = _this.parents();
    console.log("Grandparent is " + grandparent);
    console.log(Object.getOwnPropertyNames(EL));

    /* Right here need to check if li element floor that was 
       clicked on is equal to currentFloor. If not we then need 
       to call changeFloor method to clear out layout and change
       currentFloor.
        */

    const DEPT = $(EL).data("department");
    console.log(DEPT);
    $(DEPT).toggleClass("hidden");
  });

  // Get the Floor Layout number that was clicked and
  // call showFloorLayout to display clicked floor
  /* $(".floors > div").on("click", event => {
    const EL = event.currentTarget;
    let newFloor = $(EL).data("floor");
    
    currentFloor = changeFloor(currentFloor, newFloor);
    console.log("The Current floor is " + currentFloor);
  }); */
}); // end dom ready
