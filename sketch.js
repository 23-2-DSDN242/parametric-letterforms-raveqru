const canvasWidth = 960;
const canvasHeight = 500;

//Letter parameters data
const letterA = {
  "stroke1_posX": 280,
  "stroke1_posY": 155,
  "stroke1_width": 40,
  "stroke1_height": 205,
  "angle_set": 0,

  "right_posX": 250,
  "right_posY": 245,
  "right_width": 40,
  "right_height": 215,
  "angle_set2": -20,

  "topRectX": 325,
  "topRectY": 255,
  "topWidth": 70,
  "topHeight": 30,

  "stroke2_posX": 325,
  "stroke2_posY": 260,
  "stroke2_width": 60,
  "stroke2_height": 20,

}

const letterB = {
  "stroke1_posX": 440,
  "stroke1_posY": 160,
  "stroke1_width": 80,
  "stroke1_height": 80,
  "angle_set": 0,

  "right_posX": 430,
  "right_posY": 150,
  "right_width": 40,
  "right_height": 205,
  "angle_set2": 0,

  "topRectX": 485,
  "topRectY": 300,
  "topWidth": 40,
  "topHeight": 60,

  "stroke2_posX": 485,
  "stroke2_posY": 300,
  "stroke2_width": 90,
  "stroke2_height": 90,
}

const letterC = {
  "stroke1_posX": 587,
  "stroke1_posY": 200,
  "stroke1_width": 30,
  "stroke1_height": 100,
  "angle_set": 0,

  "right_posX": 580,
  "right_posY": 150,
  "right_width": 40,
  "right_height": 205,
  "angle_set2": 0,

  "topRectX": 630,
  "topRectY": 335,
  "topWidth": 80,
  "topHeight": 40,

  "stroke2_posX": 630,
  "stroke2_posY": 170,
  "stroke2_width": 80,
  "stroke2_height": 30,
}

const backgroundColor = "#F2E2C4";

const relief = "#af3238";
const sunset = "#f4bf4e";
const blue = "#1e3c71";
const beige = "#F2E2C4";
const brown = "#3e1312"

function setup() {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw() {
  //angle mode for rotation
  angleMode(DEGREES)

  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x, center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);

}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  //red stroke rectangle
  let stroke1X = 1 + letterData["stroke1_posX"];
  let stroke1Y = 1 + letterData["stroke1_posY"];
  let stroke1W = 1 + letterData["stroke1_width"];
  let stroke1H = 1 + letterData["stroke1_height"];
  let rotation = 0 + letterData["angle_set"]

  //yellow rectangle
  let rightX = 1 + letterData["right_posX"];
  let rightY = 1 + letterData["right_posY"];
  let rightW = 1 + letterData["right_width"];
  let rightH = 1 + letterData["right_height"];
  let rotation2 = 0 + letterData["angle_set2"]

  //blue reatcngle
  let rectTopX = 0 + letterData["topRectX"]
  let rectTopY = 0 + letterData["topRectY"]
  let rectTopWidth = 0 + letterData["topWidth"]
  let rectTopHeight = 0 + letterData["topHeight"]

  //brown stroke rectangle
  let stroke2X = 1 + letterData["stroke2_posX"];
  let stroke2Y = 1 + letterData["stroke2_posY"];
  let stroke2W = 1 + letterData["stroke2_width"];
  let stroke2H = 1 + letterData["stroke2_height"];





  //draws rectangle down below

  //yellow ectangle 
  fill(sunset)
  noStroke()
  push()
  translate(50, 100);
  rotate(rotation2);
  translate(-50, -100);

  strokeWeight(10)
  rect(rightX, rightY, rightW, rightH, 20)

  pop()

  //red stroke rectangle
  noFill()
  push()
  rotate(rotation);


  stroke(relief)//stroke colour
  strokeWeight(10)
  rect(stroke1X, stroke1Y, stroke1W, stroke1H, 20)

  pop()



  //blue rectabgle
  push()
  rectMode(CENTER)

  fill(blue)//colour
  rect(rectTopX, rectTopY, rectTopWidth, rectTopHeight, 20)

  pop()

  //brown stroke rectangle
  push()
  rectMode(CENTER)

  noFill(0)
  stroke(brown)//stoke colour
  strokeWeight(10)
  rectMode(CENTER)
  rect(stroke2X, stroke2Y, stroke2W, stroke2H, 20)

  pop()



}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}



