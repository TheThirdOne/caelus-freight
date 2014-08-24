var gamestate = {};
gamestate.planetData = [];
gamestate.planetData[0] = {name:"world",technology:0,minerals:0,fuel:0,food:0,antimatter:0,production:0,society:0};
gamestate.planetData[1] = {name:"world",technology:0,minerals:0,fuel:0,food:0,antimatter:0,production:0,society:0};
gamestate.planetData[2] = {name:"world",technology:0,minerals:0,fuel:0,food:0,antimatter:0,production:0,society:0};
gamestate.planetData[3] = {name:"world",technology:0,minerals:0,fuel:0,food:0,antimatter:0,production:0,society:0};
gamestate.planetData[4] = {name:"world",technology:0,minerals:0,fuel:0,food:0,antimatter:0,production:0,society:0};
gamestate.planetData[5] = {name:"world",technology:0,minerals:0,fuel:0,food:0,antimatter:0,production:0,society:0};
gamestate.currentPlanet = 0;
gamestate.costCache = [];

function onStart(){
  //random gen gamestate.planetData
  //gen player stats
  onArrive();
}
function onLoadGame(){
  //Load gamestate.planetData
  //load player stats
  onArrive();
}
function onArrive(){
  timeStep();
  gamestate.costCache = generateCosts(gamestate.currentPlanet);
  loadPlanetInterface(gamestate.currentPlanet);
}

function onLeave(){
  clearPlanetInterface();
}

function generateWorlds(){

}

function timeStep(){


}

function generateCosts(planet){

}

function generateDemand(planet){


}

function generateSupply(planet){


}

gamestate.playerData = {reputation:[0,0,0,0,0,0]};
gamestate.playerData.inventory = {};
gamestate.playerData.ship = {engine:{},cargobay:{}};

function jump(to,from){
  
  //getDistance
  //calculate fuel cost
  //subtract money
  fly(to,from);
}