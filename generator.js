function toggleAsteroids() {
  if (document.getElementsByClassName('trackAsteroids')[0].childNodes[3] != undefined) {
    //Remove Asteroids
    resetAsteroids();
    document.getElementById('asteroidToggle').className -= ' checked';
  } else{
    generateAsteroids();
    document.getElementById('asteroidToggle').className += ' checked';
  };
}

function toggleStars() {
  if (document.getElementById('starsContainer').childNodes[1] != undefined) {
    //Remove Stars
    resetStars();
    document.getElementById('starToggle').className -= ' checked';
  } else{
    generateStars();
    document.getElementById('starToggle').className += ' checked';
  };
}

function resetAsteroids() {
  document.getElementsByClassName('trackAsteroids')[0].innerHTML = document.getElementsByClassName('trackAsteroids')[0].childNodes[1].outerHTML;
}

function resetStars() {
  document.getElementById('starsContainer').innerHTML = document.getElementById('starsContainer').childNodes[1].outerHTML;
}

function generateAsteroids(){
  var a = document.getElementsByClassName('trackAsteroids')[0];
  var b = a.childNodes[0];

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
  var a = document.getElementById('starsContainer');
  var b = a.childNodes[0];
  for(var i = 0;i < 720; i++){
    var c = b.cloneNode();
    var d = Math.random()*100;
    var e = Math.random()*100;
    c.style.left = ''+d+'%';
    c.style.top =  ''+e+'%';
    a.appendChild(c);
  }
}