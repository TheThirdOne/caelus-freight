var selectedPlanet = 0;

function toggleOptions() {
	if (document.getElementById('optionsHider').className != 'hidden') {
		document.getElementById('optionsHider').className = 'hidden';
	} else{
		document.getElementById('optionsHider').className = '';
	};
}

function hideInfo() {
	document.getElementById('sideBarHider').className = 'hidden';
}

function verifyFly(planetId) {
	document.getElementById('verifyFlyHider').className = '';
	document.getElementById('planetId').innerText = gamestate.planetData[planetId].name;
	//fly(planetId, currentPlanet);
}

function hideVerifyFly() {
	document.getElementById('verifyFlyHider').className = 'hidden';
}

function verifyFlySuccess() {
	hideVerifyFly();
	jump(selectedPlanet);
}

function clickInfo(planetId) {
  selectedPlanet = planetId;
	document.getElementById('sideBarHider').className = '';
	document.getElementById('flyToButton').onclick = function() {verifyFly(planetId)};
	document.getElementById('planetIdInfo').innerText = gamestate.planetData[planetId].name;
	document.getElementById('infoReputation').innerText = gamestate.playerData.reputation[planetId];
}

function updateInventory() {
	document.getElementsByClassName('inventory')[0].innerHTML = '';
	for (var item in gamestate.playerData.inventory) {
		if (gamestate.playerData.inventory[item] != 0 ) {
			var div = document.createElement('div');
			div.innerHTML = item + " x" + gamestate.playerData.inventory[item];
			document.getElementsByClassName('inventory')[0].appendChild(div);
		};
	};
}

function showNotification(message) {
	document.getElementById('notificationsHider').className = '';
	document.getElementById('notificationMessage').innerText = message;
}

function hideNotification() {
	document.getElementById('notificationsHider').className = 'hidden';
}