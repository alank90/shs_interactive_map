
const changeFloor = (currentFloor, newFloor) => {
  console.log("currentFloor " + currentFloor);
  // Hide Currently Displayed Floor in DOM
  $(`#${currentfloor}`).addClass("hidden");
};

module.exports = changeFloor;
