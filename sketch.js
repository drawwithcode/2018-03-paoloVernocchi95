function preload(){
  // put preload code here
}
var colorList = ['#e42b1d',//red
                 '#f7ce00',//yellow
                 '#009d45',//green
                 '#0073b4'];//blue

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  frameRate(30);

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
translate(windowWidth/2, windowHeight/2);
  var x = random() *400;
var y = random() * 400;
var r = random() * 10;

if(random()<0.25){
   fill(colorList[0]);
}
else if (random()>0.25 && random()<0.5) {
  fill(colorList[1]);
}
else if (random()>0.5 && random()<0.75) {
  fill(colorList[2]);
}
else  {
  fill(colorList[3]);
}


stroke(1);
ellipse(x, y, 25);
  // put drawing code here
  fill(0);
  text(frameCount,windowWidth/2, windowHeight/2);


}
