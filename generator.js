function generateAsteroids(){
  var a = document.getElementsByClassName('trackAsteroids')[0];
  var b = a.childNodes[1];

  for(var i = 0;i < 180; i+=.25){
    var c = b.cloneNode();
    var d = Math.cos(i/90*Math.PI);
    var e = Math.sin(i/90*Math.PI);
    var f = Math.floor(Math.random()*20);
    c.style.left = (d)*(185-f)+190;
    c.style.top = (e)*(185-f)+190;
    a.appendChild(c);
  }
}

function generateStars(container){
  var a = document.getElementById(container);
  var b = a.childNodes[1];

  for(var i = 0;i < 180; i+=.25){
    var c = b.cloneNode();
    var d = Math.floor(Math.random()* document.getElementById(container).clientWidth);
    var e = Math.floor(Math.random()* document.getElementById(container).clientWidth);
    c.style.left = (d);
    c.style.top = (e);
    a.appendChild(c);
  }
}