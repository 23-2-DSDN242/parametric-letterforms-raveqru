/* these are optional special variables which will change the system */
var systemBackgroundColor = "#F2E2C4";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

//colours 
const relief = "#af3238";
const sunset = "#f4bf4e";
const blue = "#1e3c71";
const beige = "#F2E2C4";
const brown = "#3e1312"



function drawLetter(letterData) {
  angleMode(DEGREES)

  //red stroke rectangle
  let stroke1Y = letterData["stroke1_posY"];
  let stroke1W = letterData["stroke1_width"];
  let stroke1H = letterData["stroke1_height"];
  let rotation = letterData["angle_set"]

  //yellow rectangle
  let rightX = letterData["right_posX"];
  let rightY = letterData["right_posY"];
  let rightW = letterData["right_width"];
  let rightH = letterData["right_height"];
  let rotation2 = letterData["angle_set2"]
  //blue rectangle
  let rectTopY = letterData["topRectY"]
  let rectTopWidth = letterData["topWidth"]
  let rectTopHeight = letterData["topHeight"]

  //brown stroke rectangle
  let stroke2X = letterData["stroke2_posX"];
  let stroke2Y = letterData["stroke2_posY"];
  let stroke2W = letterData["stroke2_width"];
  let stroke2H = letterData["stroke2_height"];



  //draws rectangles for letters 

  //yellow rectangle
  fill(sunset)
  noStroke()
  push()
  translate(50, 100);
  rotate(rotation2);

  //rectMode(CENTER)  
  translate(-50, -100);
  strokeWeight(10)
  rect(rightX, rightY, rightW, rightH, 20)

  pop()


  //red stroke rectangle
  noFill()
  push()
  translate(50, 100);
  rotate(rotation);

  translate(-50, -100);
  // stroke (outline) colour
  stroke(relief)
  strokeWeight(10)
  rect(10, stroke1Y, stroke1W, stroke1H, 20)

  pop()



  //blue rectabgle
  push()
  rectMode(CENTER)

  //rectangle colour
  fill(blue)
  rect(50, rectTopY, rectTopWidth, rectTopHeight, 20)

  pop()

  //brown stroke rectangle
  push()
  rectMode(CENTER)

  noFill(0)
  //stroke colour (outline) 
  stroke(brown)
  strokeWeight(10)
  rect(stroke2X, stroke2Y, stroke2W, stroke2H, 20)

  pop()
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  if (percent < 40) {
    //for percent < 40
    new_letter["stroke1_posY"] = map(percent, 0, 40, oldObj["stroke1_posY"], newObj["stroke1_posY"]);
    new_letter["stroke1_width"] = map(percent, 0, 40, oldObj["stroke1_width"], newObj["stroke1_width"]);
    new_letter["stroke1_height"] = map(percent, 0, 40, oldObj["stroke1_height"], newObj["stroke1_height"]);
    new_letter["angle_set"] = map(percent, 0, 40, oldObj["angle_set"], 144);

    new_letter["right_posX"] = map(percent, 0, 40, oldObj["right_posX"], newObj["right_posX"]);
    new_letter["right_posY"] = map(percent, 0, 40, oldObj["right_posY"], newObj["right_posY"]);
    new_letter["right_width"] = map(percent, 0, 40, oldObj["right_width"], newObj["right_width"]);
    new_letter["right_height"] = map(percent, 0, 40, oldObj["right_height"], newObj["right_height"]);
    new_letter["angle_set2"] = map(percent, 0, 40, oldObj["angle_set2"], 0);

    new_letter["topRectY"] = map(percent, 0, 40, oldObj["topRectY"], newObj["topRectY"]);
    new_letter["topWidth"] = map(percent, 0, 40, oldObj["topWidth"], newObj["topWidth"]);
    new_letter["topHeight"] = map(percent, 0, 40, oldObj["topHeight"], newObj["topHeight"]);

    new_letter["stroke2_posX"] = map(percent, 0, 40, oldObj["stroke2_posX"], newObj["stroke2_posX"]);
    new_letter["stroke2_posY"] = map(percent, 0, 40, oldObj["stroke2_posY"], newObj["stroke2_posY"]);
    new_letter["stroke2_width"] = map(percent, 0, 40, oldObj["stroke2_width"], newObj["stroke2_width"]);
    new_letter["stroke2_height"] = map(percent, 0, 40, oldObj["stroke2_height"], newObj["stroke2_height"]);

  } else if (40 <= percent && percent < 60) {
    // for 40 <= percent < 60
    new_letter["stroke1_posY"] = map(percent, 40, 60, oldObj["stroke1_posY"], newObj["stroke1_posY"]);
    new_letter["stroke1_width"] = map(percent, 40, 60, oldObj["stroke1_width"], newObj["stroke1_width"]);
    new_letter["stroke1_height"] = map(percent, 40, 60, oldObj["stroke1_height"], newObj["stroke1_height"]);
    new_letter["angle_set"] = map(percent, 40, 60, 0, 0);

    new_letter["right_posX"] = map(percent, 40, 60, oldObj["right_posX"], newObj["right_posX"]);
    new_letter["right_posY"] = map(percent, 40, 60, oldObj["right_posY"], newObj["right_posY"]);
    new_letter["right_width"] = map(percent, 40, 60, oldObj["right_width"], newObj["right_width"]);
    new_letter["right_height"] = map(percent, 40, 60, oldObj["right_height"], newObj["right_height"]);
    new_letter["angle_set2"] = map(percent, 40, 60, 0, 0);

    new_letter["topRectY"] = map(percent, 40, 60, oldObj["topRectY"], newObj["topRectY"]);
    new_letter["topWidth"] = map(percent, 40, 60, oldObj["topWidth"], newObj["topWidth"]);
    new_letter["topHeight"] = map(percent, 40, 60, oldObj["topHeight"], newObj["topHeight"]);

    new_letter["stroke2_posX"] = map(percent, 40, 60, oldObj["stroke2_posX"], newObj["stroke2_posX"]);
    new_letter["stroke2_posY"] = map(percent, 40, 60, oldObj["stroke2_posY"], newObj["stroke2_posY"]);
    new_letter["stroke2_width"] = map(percent, 40, 60, oldObj["stroke2_width"], newObj["stroke2_width"]);
    new_letter["stroke2_height"] = map(percent, 40, 60, oldObj["stroke2_height"], newObj["stroke2_height"]);

  } else {

    // percent >= 60
    //the lower bound of the value's current range starts from 0 since some of the values require bellow the percent number to display correctly
    new_letter["stroke1_posY"] = map(percent, 0, 100, oldObj["stroke1_posY"], newObj["stroke1_posY"]);
    new_letter["stroke1_width"] = map(percent, 0, 100, oldObj["stroke1_width"], newObj["stroke1_width"]);
    new_letter["stroke1_height"] = map(percent, 0, 100, oldObj["stroke1_height"], newObj["stroke1_height"]);
    new_letter["angle_set"] = map(percent, 0, 100, oldObj["angle_set"], newObj["angle_set"]);

    new_letter["right_posX"] = map(percent, 0, 100, oldObj["right_posX"], newObj["right_posX"]);
    new_letter["right_posY"] = map(percent, 0, 100, oldObj["right_posY"], newObj["right_posY"]);
    new_letter["right_width"] = map(percent, 0, 100, oldObj["right_width"], newObj["right_width"]);
    new_letter["right_height"] = map(percent, 0, 100, oldObj["right_height"], newObj["right_height"]);
    new_letter["angle_set2"] = map(percent, 0, 100, oldObj["angle_set2"], newObj["angle_set2"]);

    new_letter["topRectY"] = map(percent, 0, 100, oldObj["topRectY"], newObj["topRectY"]);
    new_letter["topWidth"] = map(percent, 0, 100, oldObj["topWidth"], newObj["topWidth"]);
    new_letter["topHeight"] = map(percent, 0, 100, oldObj["topHeight"], newObj["topHeight"]);

    new_letter["stroke2_posX"] = map(percent, 0, 100, oldObj["stroke2_posX"], newObj["stroke2_posX"]);
    new_letter["stroke2_posY"] = map(percent, 0, 100, oldObj["stroke2_posY"], newObj["stroke2_posY"]);
    new_letter["stroke2_width"] = map(percent, 0, 100, oldObj["stroke2_width"], newObj["stroke2_width"]);
    new_letter["stroke2_height"] = map(percent, 0, 100, oldObj["stroke2_height"], newObj["stroke2_height"]);
  }

  return new_letter;
}

//displayed word when opens
var swapWords = [
  "ABSTRACT",
  "INSPIRED",
  "TYPEFACE"
]


