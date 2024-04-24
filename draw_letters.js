/* these are optional special variables which will change the system */
var systemBackgroundColor = "#F2E2C4";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */
const relief = "#af3238";
const sunset = "#f4bf4e";
const blue = "#1e3c71";
const beige = "#F2E2C4";
const brown = "#3e1312"

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES)

  // color/stroke setup
  // stroke(strokeColor);
  // strokeWeight(4);

  // determine parameters for second circle
  let stroke1X = 1 + letterData["stroke1_posX"];
  let stroke1Y = 1 + letterData["stroke1_posY"];
  let stroke1W = 1 + letterData["stroke1_width"];
  let stroke1H = 1 + letterData["stroke1_height"];
  let stroke1c = 1 + letterData["stroke1_corner"];
  let rotation = 0 + letterData["angle_set"]

  let rightX = 1 + letterData["right_posX"];
  let rightY = 1 + letterData["right_posY"];
  let rightW = 1 + letterData["right_width"];
  let rightH = 1 + letterData["right_height"];
  let right2c = 1 + letterData["right_corner"];
  let rotation2 = 0 + letterData["angle_set2"]

  let rectTopX = 0 + letterData["topRectX"]
  let rectTopY = 0 + letterData["topRectY"]
  let rectTopWidth = 0 + letterData["topWidth"]
  let rectTopHeight = 0 + letterData["topHeight"]


  let stroke2X = 1 + letterData["stroke2_posX"];
  let stroke2Y = 1 + letterData["stroke2_posY"];
  let stroke2W = 1 + letterData["stroke2_width"];
  let stroke2H = 1 + letterData["stroke2_height"];

  let centerX= 100/2
  let centerY=200/2


  // //draw letter here




  //right  rectangle 
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
    //left stroke rectangle#1
    noFill()
    push()
    translate(50, 100);
    rotate(rotation);
    
    translate(-50, -100);
  
    stroke(relief)
    strokeWeight(10)
    rect(10, stroke1Y, stroke1W, stroke1H, 20)
  
    pop()
  


  //top rectabgle
  push()
  //translate(50, 100);
  rectMode(CENTER)
  //translate(-50, -100);

  fill(blue)
  rect(50, rectTopY, rectTopWidth, rectTopHeight, 20)
  pop()

  push ()
  //stoke bottom rectangle
  noFill(0)
  stroke(brown)
  strokeWeight(10)
  rectMode(CENTER)
  rect(stroke2X, stroke2Y, stroke2W, stroke2H, 20)
pop()




}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["Trix1"] = map(percent, 0, 100, oldObj["Trix1"], newObj["Trix1"]);
  new_letter["Triy1"] = map(percent, 0, 100, oldObj["Trix1"], newObj["Trix1"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "FABA",
  "BAAAAAAA"
]
