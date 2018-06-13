const $ = require("jquery");

// DOM is ready
$(document).ready(function() {
  // ============ Routine to reveal/hide layers ======== //
  $("div").on("click", "img", (event) => {
    const el = event.target;
    /* var id = el.attr("id"); */
     console.log(el);
  });
}); // end dom ready


