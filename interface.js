var selectedPlanet = 0;

function hide(id) {
	document.getElementById(id).className = 'hidden';
}

function reveal(id) {
	document.getElementById(id).className = '';
}

function toggleOptions() {
	if (document.getElementById('optionsHider').className != 'hidden') {
		hide('optionsHider');
	} else{
		reveal('optionsHider');
	};
}

function hideInfo() {
	hide('sideBarHider');
}

function verifyFly(planetId) {
	reveal('verifyFlyHider');
	document.getElementById('planetId').innerText = gamestate.planetData[planetId].name;
}

function hideVerifyFly() {
	hide('verifyFlyHider');
}

function verifyFlySuccess() {
	hideVerifyFly();
	if (animating) {
		showNotification('Wait until the current flight is over!')
	} else{
		jump(selectedPlanet);
	};
}

function clickInfo(planetId) {
	selectedPlanet = planetId;
	if (gamestate.currentPlanet == planetId) {
		reveal('currentPlanet');
		hide('flyToButtonHider');
	} else{
		hide('currentPlanet');
		reveal('flyToButtonHider');
		document.getElementById('flyToButton').onclick = function() {verifyFly(planetId)};
		document.getElementById('purchase').innerHTML = '';
		for (var item in gamestate.costCache) {
			var div = document.createElement('div');
			div.className = 'panel transactable';
			div.onclick = function(item){ return function() {
					transaction(item,1);
				}}(item);
			div.innerHTML = item;
			document.getElementById('purchase').appendChild(div);
		}
		document.getElementById('sell').innerHTML = '';
		for (var item in gamestate.playerData.inventory) {
			if (item != 'credits') {
				var div = document.createElement('div');
				div.className = 'panel transactable';
				div.onclick = function() {
					transaction(item,-1);
				}
				div.innerHTML = item;
				document.getElementById('sell').appendChild(div);
			};
		}
	};
	reveal('sideBarHider');
	document.getElementById('planetIdInfo').innerText = gamestate.planetData[planetId].name;
	document.getElementById('infoReputation').innerText = gamestate.playerData.reputation[planetId];
}

function updateInventory() {
	//Update Inventory list in sideBar
	document.getElementsByClassName('inventory')[0].innerHTML = '';
	for (var item in gamestate.playerData.inventory) {
		if (gamestate.playerData.inventory[item] != 0 && item != 'credits' && item != 'fuel') {
			var div = document.createElement('div');
			div.innerHTML = item + " x" + gamestate.playerData.inventory[item];
			document.getElementsByClassName('inventory')[0].appendChild(div);
		};
	};
	if (document.getElementsByClassName('inventory')[0].innerText == '') {
		var div = document.createElement('div');
		div.innerHTML = "You have no stuff, you existentialist";
		document.getElementsByClassName('inventory')[0].appendChild(div);
	};
	//Update Credits and Fuel on sideBar
	document.getElementById('credits').innerText = gamestate.playerData.inventory.credits;
	document.getElementById('fuel').innerText = gamestate.playerData.inventory.fuel;
}

function showNotification(message) {
	reveal('notificationsHider');
	document.getElementById('notificationMessage').innerText = message;
}

function hideNotification() {
	hide('notificationsHider');
}

function loadPlanetInterface() {
	
}

function clearPlanetInterface() {
	
}