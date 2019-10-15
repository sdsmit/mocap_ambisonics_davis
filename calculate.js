autowatch = 1;
inlets = 1;
outlets = 1;
var shoulderX = 0;
var shoulderY = 0;
var shoulderZ = 0; 
var sideA = 0;
var sideB = 0;
var sideC = 0;
var fingerX = 0; 
var fingerY = 0; 
var fingerZ = 0;
var eyeY = 0;
var eyeZ = 0;
var armlength = 0;
var angle = 0;

function get_angle(fingerX, fingerY, shoulderX, shoulderY);
  post("fingerX:", fingerX);
  armlength = Math.sqrt(Math.pow(fingerX - shoulderX), 2) + Math.pow(fingerY - shoulderY), 2));
  sideA = armlength;
  sideB = armlength;
  sideC = Math.sqrt(Math.pow(armlength - fingerX), 2) + (Math.pow(fingerY - 0), 2));
  angle = Math.atan(sideC / sideB);
  outlet(0, angle);
  post(angle);
}
