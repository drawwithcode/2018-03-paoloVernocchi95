function preload(){
  // put preload code here
}
var colorList = ['#e42b1d',//red
                 '#f7ce00',//yellow
                 '#009d45',//green
                 '#0073b4'];//blue

function setup() {
  createCanvas(windowWidth,windowHeight);
  textSize(32);
  frameRate(60);

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
  if(frameCount<2500){
    fill(275);
  text("Wait for the bubble pool to fill",200,800);

  var x = random() *windowWidth;
var y = random() * windowHeight;
var a = random() *windowWidth;
var b = random() * windowHeight;
var g = random() *windowWidth;
var f = random() * windowHeight;
var h = random() *windowWidth;
var i = random() * windowHeight;
//var d = random() * 10;

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

//|| (x>1200 && x <1720 && y>600 && y<800 )
//diamentro
if(x <windowWidth/6  && y<windowHeight/6 || x>(windowWidth*5)/6  && y>(windowHeight*5)/6 ){
   var d=75;
}
/*else if (x >200 && x<600 && y>240 && y<480){
  var d=62;
}
else if (x>1200 && x <1720 && y>600 && y<800 ) {
var d=62;
}*/
else  {
 var d=40;
}


stroke(1);
ellipse(x, y, d);
ellipse(y, x, d);
ellipse(a, b, d);
ellipse(b, a, d);
ellipse(h, i, d);
ellipse(i, h, d);

}
else if (frameCount>2500 && frameCount<2600) {
  fill(colorList[0]);
  ellipse(200, 800, 50);
  fill(colorList[1]);
  ellipse(250, 800, 50);
  fill(colorList[2]);
  ellipse(300, 800, 50);
  fill(colorList[3]);
  ellipse(350, 800, 50);
}
else  {
textSize(42);
text("Now Find Sheldon",200,840);

}

  // put drawing code here
  fill(275);
  text(frameCount,300,300);


}
