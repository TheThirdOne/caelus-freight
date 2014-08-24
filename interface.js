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
function clickInfo(planetId) {
	document.getElementById('sideBarHider').className = '';
	document.getElementById('planetIdInfo').innerText = planetId;
	document.getElementById('flyToButton').onclick = function() {verifyFly(planetId)};
}

function verifyFly(planetId) {
	document.getElementById('verifyFlyHider').className = '';
	console.log(planetId);
	document.getElementById('planetId').innerText = planetId;
	//fly(planetId, currentPlanet);
}