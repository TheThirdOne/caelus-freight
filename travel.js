var beginning = (new Date()).getTime();
var times = [5,    15,  25,  50, 100, 200];
var dists = [120, 190, 275, 440, 540, 620];
function getPlanetAngle(planet,offset){
  var now = (new Date()).getTime()+(offset||0)-beginning;
  return (now/1000 % times[planet])/times[planet]*-2*Math.PI + Math.PI/2;
}
function getPlanetLoc(planet,offset){
  var angle = getPlanetAngle(planet,offset);
  var x = Math.cos(angle)*dists[planet]/2;
  var y = Math.sin(angle)*dists[planet]/2;
  return [x,y];
}

function flyBetweenPlanets(to,from){
  var a = document.getElementById('container');
  var style = window.getComputedStyle(a);
  generateAnimation(toDOMLoc(getPlanetLoc(to,Number.parseInt(style.webkitAnimationDuration)*1000)),toDOMLoc(getPlanetLoc(from)),0);
}

function toDOMLoc(loc){
  var out = [];
  var a = document.getElementsByClassName('map')[0];
  var style = window.getComputedStyle(a);
  out[0] = loc[0]+Number.parseInt(style.width)/2;
  out[1] = -loc[1]+Number.parseInt(style.height)/2;
  return out;
}

function findKeyframesRule(rule){
//credit: https://gitorious.org/webkit/webkit/source/438fd0b118bd9c2c82b6ab23956447be9c24f136:LayoutTests/animations/change-keyframes.html#Lundefined
    var ss = document.styleSheets;
    for (var i = 0; i < ss.length; ++i) {
      if(ss[i].cssRules)
        for (var j = 0; j < ss[i].cssRules.length; ++j) {
            if (ss[i].cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE && ss[i].cssRules[j].name == rule)
                return ss[i].cssRules[j];
        }
    }
    
    return null;
}

function generateAnimation(to,from,startAngle){
  var angle = Math.atan2(to[0]-from[0],from[1]-to[1])/Math.PI*180;  //y is negated cus we are using top:
  var fromRotate = "transform: rotate(" + startAngle +"deg);";
  var toRotate = "transform: rotate(" + angle +"deg);";
  var fromLoc = "top:"+from[1] + "px;left:" + from[0] + "px;";
  var toLoc = "top:"+to[1] + "px;left:" + to[0] + "px;";
  var keyframes = findKeyframesRule('fly');
  keyframes.deleteRule("from");
  keyframes.deleteRule("20%");
  keyframes.deleteRule("50%");
  keyframes.deleteRule("80%");
  keyframes.deleteRule("to");
  
  keyframes.insertRule(
    "from{"
    + fromRotate
    + fromLoc +
    " height:10px;\
      width:10px;\
      margin:-5 0 0 -5;\
    }");
    
  keyframes.insertRule(
    "20%{"
    + fromRotate +
    "  height:50px;\
      width:50px;\
      margin:-25 0 0 -25;\
    }");
  keyframes.insertRule(
    "50%{"
    + toRotate
    + fromLoc +
    " height:50px; \
      width:50px;\
      margin:-25 0 0 -25;\
    }");
  keyframes.insertRule(
    "80%{"
    + toLoc +
    " height:50px;\
      width:50px;\
      margin:-50 0 0 0;\
    }");
  keyframes.insertRule(
    "to{"
    + toRotate
    + toLoc +
    " height:10px;\
      width:10px;\
      margin:-5 0 0 -5;\
    }");
  var a = document.getElementById('container').style;
  a.display = "none";
  a.webkitAnimationName = 'none';
  setTimeout(start, 10);
}

function start(){
  var a = document.getElementById('container').style;
  a.webkitAnimationName = 'fly';
  a.display = 'initial';
}