autowatch = 1;
inlets = 1
outlets = 1

var shoulderX = jsarguments[4];
var shoulderY = jsarguments[5];
var shoulderZ = jsarguments[6];
var sideA;
var sideB;
var sideC;
var fingerX = jsarguments[1];
var fingerY = jsarguments[2];
var fingerZ = jsarguments[3];
var eyeX;
var eyeY;
var eyeZ;
var armlength;
var angle;

//calculates angle user is pointing on same scale as the azimuth in ambisonics patch

function getUserAngle(shoulderX,shoulderY,fingerX,fingerY) {
  //calculates armlength with every iteration
  armlength = Math.sqrt(((Math.pow(fingerX - shoulderX), 2) + (Math.pow(fingerY - shoulderY), 2)));
  sideA = armlength;
  sideB = armlength;
  sideC = Math.sqrt(((Math.pow(armlength - fingerX), 2) + (Math.pow(fingerY - 0), 2)));
  angle = Math.atan(C / B)
  bang();
  outlet(0, angle);
  post("working");
}
