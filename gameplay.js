var gamestate = {};
gamestate.planetData = [];
gamestate.planetData[0] = {name:"Earth"  ,technology:1,minerals:1,fuel:1,food:0,antimatter:0,production:1,population:1,society:0};
gamestate.planetData[1] = {name:"Mars"   ,technology:1,minerals:1,fuel:1,food:0,antimatter:0,production:1,population:1,society:0};
gamestate.planetData[2] = {name:"Jupiter",technology:1,minerals:1,fuel:1,food:0,antimatter:0,production:1,population:1,society:0};
gamestate.planetData[3] = {name:"Saturn" ,technology:1,minerals:1,fuel:1,food:0,antimatter:0,production:1,population:1,society:0};
gamestate.planetData[4] = {name:"Uranus" ,technology:1,minerals:1,fuel:1,food:0,antimatter:0,production:1,population:1,society:0};
gamestate.planetData[5] = {name:"Neptune",technology:1,minerals:1,fuel:1,food:0,antimatter:0,production:1,population:1,society:0};
gamestate.currentPlanet = 0;
gamestate.costCache = [];
gamestate.supplyCache = [];

function onStart(){
  
  onArrive();
}

function newGame(){
  //random gen gamestate.planetData
  //gen player state
  onStart();
}

function loadGame(name){
  gamestate = JSON.parse(localStorage[name]);
  onStart();
}

function saveGame(name){
  localStorage.setItem(name,JSON.stringify(gamestate));
}


function onArrive(){
  timeStep();
  gamestate.costCache = generateCosts(gamestate.currentPlanet);
  
  var a = document.getElementById(gamestate.planetData[gamestate.currentPlanet].name);
  a.className = "track currentTrack";
  loadPlanetInterface(gamestate.currentPlanet);
}

function onLeave(to){
  var a = document.getElementById(gamestate.planetData[gamestate.currentPlanet].name);
  a.className = "track";
  clearPlanetInterface();
  hideInfo();
  updateInventory()
  gamestate.currentPlanet = to;
}

function generateWorlds(){

}

function timeStep(){


}

function generateCosts(planet){
  var temp;
  var out = {};
  var cache = {};
  for(var item in itemConfig){
    temp = itemConfig[item](gamestate.planetData[planet]); //returns [supply, demand]
    cache[item] = temp;
    temp = temp[1]/temp[0];
    if(isNaN(temp) || temp === 0 || temp > 1000000000){
      continue;
    }
    out[item] = temp;
  }
  gamestate.supplyCache = cache;
  return out;
}


var itemConfig =
{
  computers:function(traits){return [traits.production*traits.technology,traits.population/traits.minerals]},
  fuel:function(traits){return [traits.production*traits.fuel,traits.population/traits.technology]}
};

var worldConfig = {
  population:.1,
  technology:1.1,
  fuel:0.1,
  minerals:0.1,
  antimatter:0,
  food: 1,
  production: 1
};

gamestate.playerData = {reputation:[0,0,0,0,0,0]};
gamestate.playerData.inventory = {"credits":1000,"fuel":1000};
gamestate.playerData.ship = {engine:{},cargobay:{}};

function jump(to){
  var d = getDistance(to,gamestate.currentPlanet);
  var cost = ((d/30) | 0);
  if(gamestate.playerData.inventory.fuel - cost >= 0){
    gamestate.playerData.inventory.fuel -= cost;
    fly(to,gamestate.currentPlanet);
    onLeave(to);
  }else{
    showNotification('You do not have enough fuel to complete the journey');
  }
}
function test (test) {
  console.log(gamestate.playerData.inventory[test])
}
function transaction(itemName,itemQuantity) {
  // item quantity + inventory quantity >= 0 && player credits + (itemQuantity * item cost on planet) >= 0
  console.log(gamestate.playerData.inventory[itemName])
  if (itemQuantity + (gamestate.playerData.inventory[itemName] || 0) >= 0 && gamestate.playerData.inventory.credits + (itemQuantity * gamestate.costCache[itemName]) >= 0 ) {
    gamestate.playerData.inventory[itemName] = itemQuantity + (gamestate.playerData.inventory[itemName]||0);
    gamestate.playerData.inventory.credits -= (itemQuantity * gamestate.costCache[itemName]);
    updateInventory();
  } else{
    showNotification("You cannot afford this transaction");
  };
  updateTransactionList()
}