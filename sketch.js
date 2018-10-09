function preload() {
  myFont = loadFont('immagini/BADABB__.TTF');
  // put preload code here
}
var colorList = ['#e42b1d', //red
  '#f7ce00', //yellow
  '#009d45', //green
  '#0073b4'
]; //blue

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);

  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  /*translate(windowWidth/2, windowHeight/2);

  for(var x = -windowWidth/2; x < windowWidth/2; x += 25) {
    for(var y = -windowHeight/2; y < windowHeight/2; y += 25) {

      stroke(255);
      fill(255, 0, 0);
      ellipse(x, y, 25);
    }*/


}

// put setup code here


function draw() {

  if (frameCount < 2000) {
    frameRate(60);
    fill(275, 275, 275, 190 - frameCount / 10);
    stroke(0, 0, 0, 190 - frameCount / 10);
    textFont(myFont);
    text("Wait for the bubble pool to fill", 300, 800);


    var x = random() * windowWidth;
    var y = random() * windowHeight;
    var a = random() * windowWidth;
    var b = random() * windowHeight;
    var g = random() * windowWidth;
    var f = random() * windowHeight;
    var h = random() * windowWidth;
    var i = random() * windowHeight;
    var c = random() * windowWidth;
    var e = random() * windowHeight;
    //var d = random() * 10;

    if (random() < 0.25) {
      fill(colorList[0]);
    } else if (random() > 0.25 && random() < 0.5) {
      fill(colorList[1]);
    } else if (random() > 0.5 && random() < 0.75) {
      fill(colorList[2]);
    } else {
      fill(colorList[3]);
    }
    var d = 40;


    stroke(1);
    ellipse(x, y, d);
    ellipse(y, x, d);
    ellipse(a, b, d);
    ellipse(b, a, d);
    ellipse(h, i, d);
    ellipse(i, h, d);
    ellipse(e, c, d);
    ellipse(c, e, d);

  } else {
    frameRate(10);
    stroke(2);
    textSize(55);
    text("Now Find Sheldon(click)", 300, 800);


    }

    fill(275);
    //text(frameCount, 300, 300);


  }

function mouseClicked() {


  fill(255); // White
  stroke(10, 0, 0,);//,(frameCount+100)-(frameCount+frameCount/100)
  textSize(35);
  fill(255, 0, 255,);
  textFont(myFont);
  text("Ritenta!", mouseX, mouseY);

  var p = random() * windowWidth;
  var n = random() * windowHeight;

  translate(p, n);
  rotate(-10);
  fill(275, 275, 275);
  ellipse(0, 0, 150);
  fill(255, 237, 0);
  strokeWeight(5);
  stroke(0, 0, 0)
  textSize(75);
  textFont(myFont);
  text("Bazinga!", 0, 0);


}


// put drawing code here
