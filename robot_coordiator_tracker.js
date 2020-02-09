fLR = function(input) {

  var x = 0
  var y = 0
  var extraMoves = 0
  var facing = "up"

  var journey = input.split("")

  journey.map(function(movement) {
    if(movement === "F") {
      if(facing === "up") {
        y = y + 1
      } else if(facing === "right") {
        x = x + 1
      } else if(facing === "left") {
        x = x - 1
      } else if(facing === "down") {
        y = y - 1
      }
    } else if(movement === "R") {
        if(facing === "right") {
          facing = "down"
        } else if(facing === "down") {
          facing = "left"
        } else if(facing === "right") {
          facing = "up"
        } else if(facing === "up") {
          facing = "right"
        }
    } else if(movement === "L") {
      if(facing === "right") {
        facing = "up"
      } else if(facing === "down") {
        facing = "right"
      } else if(facing === "right") {
        facing = "down"
      } else if(facing === "up") {
        facing = "left"
      }
    }
  })

  if(y > 0) {
    if(facing === "up") {
      extraMoves += 2
    } else if(facing === "down" && y !== 0) {
      extraMoves += 1
    } else if(facing === "left" && y > 0) {
      extraMoves += 2
    } else if(facing === "left" && y < 0) {
      extraMoves += 1
    } else if(facing === "right" && y < 0) {
      extraMoves += 1
    } else if(facing === "right" && y > 0) {
      extraMoves += 2
    }
  } else if(y < 0) {
    if(facing === "up" && y !== 0) {
      extraMoves += 1
    } else if(facing === "down") {
      extraMoves += 2
    } else if(facing === "left" && y > 0) {
      extraMoves += 1
    } else if(facing === "left" && y < 0) {
      extraMoves += 2
    } else if(facing === "right" && y > 0) {
      extraMoves += 2
    } else if(facing === "right" && y < 0) {
      extraMoves += 1
    }
  } else if(y === 0) {
      if(facing === "down") {
      extraMoves += 1
    } else if(facing === "left" && x < 0) {
      extraMoves += 2
    } else if(facing === "right" && x > 0) {
      extraMoves += 2
    } else if(facing === "up") {
      extraMoves += 1
    }
  }
  if(x + y === 0) {
    extraMoves = 0
  }
console.log(extraMoves)
};
fLR("FxLxLxFx")


    // if(movement = "R") {

    // }
  // }

// };
