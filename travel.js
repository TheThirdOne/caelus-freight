var beginning = (new Date()).getTime()
var times = [5,15,25,50,100,200];
var dists = [120, 190, 275, 380, 440, 540, 620];
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