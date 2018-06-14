const $ = require("jquery");

// DOM is ready
$(document).ready(function() {

  // ============ Routine to reveal/hide elements on floor ======== //
  $(".one").on("click", "li", event => {
    const el = event.currentTarget;

    const dept = $(el).data("department");
    console.log(dept);
    $(dept).toggleClass("hidden");
  });

}); // end dom ready
