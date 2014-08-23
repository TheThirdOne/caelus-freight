var beginning = (new Date()).getTime()
var times = [5,    15,  25,  50, 100, 200];
var dists = [120, 190, 275, 440, 540, 620];
function getPlanetAngle(planet,offset){
  var now = (new Date()).getTime()+(offset||0)-beginning;
  return (now/1000 % times[planet])/times[planet]*2*Math.PI;
}
function getPlanetLoc(planet,offset){
  var angle = getPlanetAngle(planet,offset);
  var x = Math.cos(angle)*dists[planet];
  var y = Math.cos(angle)*dists[planet];
  return [x,y]
}


generateAnimation(to,from,startAngle){
  var angle = Math.atan2(to[0]-from[0],to[1]-from[0])/Math.PI*180;
  var fromRotate = "transform: rotate(" + startAngle +"deg);";
  var toRotate = "transform: rotate(" + angle +"deg);";
  //todo toLoc from Loc
  var animation = "@-webkit-keyframes fly{\
    from{"
    + fromRotate
    + fromLoc +
    " height:10px;\
      width:10px;\
      margin:-5 0 0 -5;\
    }\
    20%{"
    + fromRotate +
    "  height:50px;\
      width:50px;\
      margin:-25 0 0 -25;\
    }\
    50%{"
    + toRotate
    + fromLoc +
    " height:50px; \
      width:50px;\
      margin:-25 0 0 -25;\
    }\
    80%{"
    + toLoc +
    " height:50px;\
      width:50px;\
      margin:-50 0 0 0;\
    }\
    to{"
    + toRotate
    + toLoc +
    " height:10px;\
      width:10px;\
      margin:-5 0 0 -5;\
    }\
  }";
  //todo put animation in css
  //todo assign animation to sprite
}