
var pointsarray = [];
var c = document.getElementById("myCanvas");
var x,y;
var number_of_points  = 3
var totaldistance = 0;
var ctx = c.getContext("2d");
function drawpoints(x , y ){
  ctx.beginPath();
  ctx.arc(x,y,10,0,2*Math.PI);
  ctx.stroke();

}


for (var i = 0; i <number_of_points; i++) {
  x = Math.floor((Math.random() * c.width) + 0);
  y = Math.floor((Math.random() * c.height) - 10);
  pointsarray.push({x,y});
  drawpoints(x,y);

}
for (var j = 0; j < pointsarray.length -1; j++) {
 drawline(pointsarray[j].x,pointsarray[j].y ,pointsarray[j+1].x, pointsarray[j+1].y);
 totaldistance+= calculate_distance(j);
 console.log(totaldistance);

}

function drawline(x,y ,x1, y1){
  ctx.moveTo(x,y);
ctx.lineTo(x1,y1);
ctx.stroke();

}

function calculate_distance(j){

  var a = pointsarray[j].x - pointsarray[j+1].x
  var b = pointsarray[j].y - pointsarray[j+1].y

  return Math.sqrt( a*a + b*b );

}
