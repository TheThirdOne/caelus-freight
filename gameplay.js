var gamestate = {};
gamestate.planetData = [];
gamestate.planetData[0] = {name:"Earth"  ,technology:0,minerals:0,fuel:0,food:0,antimatter:0,production:0,population:0,society:0};
gamestate.planetData[1] = {name:"Mars"   ,technology:0,minerals:0,fuel:0,food:0,antimatter:0,production:0,population:0,society:0};
gamestate.planetData[2] = {name:"Jupiter",technology:0,minerals:0,fuel:0,food:0,antimatter:0,production:0,population:0,society:0};
gamestate.planetData[3] = {name:"Saturn" ,technology:0,minerals:0,fuel:0,food:0,antimatter:0,production:0,population:0,society:0};
gamestate.planetData[4] = {name:"Uranus" ,technology:0,minerals:0,fuel:0,food:0,antimatter:0,production:0,population:0,society:0};
gamestate.planetData[5] = {name:"Neptune",technology:0,minerals:0,fuel:0,food:0,antimatter:0,production:0,population:0,society:0};
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
  var out = {};
  for(var item in itemConfig){
    out[item] = itemConfig[item](gamestate.planetData[planet]); //returns [supply, demand]
    out[item] = out[item][1]/out[item][0];
  }
  return out;
}


var itemConfig =
{
  computers:function(traits){return [traits.production*traits.technology,traits.population/traits.minerals]},
  fuel:function(traits){return [traits.production*traits.fuel,traits.population/traits.technology]}
};

gamestate.playerData = {reputation:[0,0,0,0,0,0]};
gamestate.playerData.inventory = {};
gamestate.playerData.ship = {engine:{},cargobay:{}};

function jump(to){
  var d = getDistance(to,gamestate.currentPlanet);
  var cost = ((d/30) | 0);
  if(gamestate.playerData.inventory.fuel - cost >= 0){
    gamestate.playerData.inventory.fuel -= cost;
    fly(to,from);
    onLeave();
    gamestate.currentPlanet = to;
  }
}