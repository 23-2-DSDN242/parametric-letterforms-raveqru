//paraemters go here
const sliderInfo = [
  ["stroke1_posY", 0, 200],
  ["stroke1_width", 0, 100],
  ["stroke1_height", 0, 200],
  ["angle_set", 0, 360],

  ["right_posX", 0, 100],
  ["right_posY", 0, 200],
  ["right_width", 0, 100],
  ["right_height", 0, 200],
  ["angle_set2", -360, 0],

  ["topRectY", 0, 200],
  ["topWidth", 0, 100],
  ["topHeight", 0, 200],

  ["stroke2_posX", 0, 100],
  ["stroke2_posY", 0, 200],
  ["stroke2_width", 0, 100],
  ["stroke2_height", 0, 200],
];

// PROBABLY DON'T NEED TO EDIT ANYTHING ELSE. STOP HERE.

const numSliders = sliderInfo.length;

if (typeof systemBackgroundColor === 'undefined') {
  var systemBackgroundColor = "#e3eded";
}

// this will use variables if they are already defined
// var systemBackgroundColor = systemBackgroundColor || "#e3eded";

// if everything is defined above, this should just work
function sliderToDataObject() {
  let obj = {};
  for (let i = 0; i < numSliders; i = i + 1) {
    o_name = sliderInfo[i][0]
    bounds_low = sliderInfo[i][1]
    bounds_high = sliderInfo[i][2]
    obj[o_name] = map(param_sliders[i].value(), 0, 100, bounds_low, bounds_high);
  }
  return obj;
}

let param_sliders = [];

let main_canvas = null;

const canvasWidth = 960;
const canvasHeight = 500;

let debugBox = false;

function setup() {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  for (let i = 0; i < numSliders; i++) {
    let cur_row = select("#row" + (i + 1))
    cur_row.show();
    let cur_slider = createSlider(0, 100, 50)
    let containerString = "slider" + (i + 1) + "Container"
    cur_slider.parent(containerString);
    param_sliders.push(cur_slider);
  }

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);
  button.parent(buttonContainer);
}

function buttonPressedEvent() {
  let obj = sliderToDataObject();
  json = JSON.stringify(obj, null, 2);
  alert(json);
}

function draw() {
  // clear screen
  background(systemBackgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  push();
  scale(2);
  translate(width / 4 - 50, 25);

  if (debugBox) {
    noFill()
    strokeWeight(4);
    stroke(0, 200, 0);
    rect(0, 0, 100, 200);
  }

  let obj = sliderToDataObject();
  drawLetter(obj);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
  else if (key == 'd') {
    debugBox = !debugBox;
    // console.log("debugBox is now: " + debugBox);
    redraw();
  }
  else if (key == ' ') {
    let obj = sliderToDataObject();
    json = JSON.stringify(obj, null, 2);
    console.log(json);
  }
}
