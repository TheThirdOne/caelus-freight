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
	console.log(planetId);
	document.getElementById('planetId').innerText = planetId;
	//fly(planetId, currentPlanet);
}

function clickInfo(planetId) {
	document.getElementById('sideBarHider').className = '';
	document.getElementById('flyToButton').onclick = function() {verifyFly(planetId)};

switch (planetId) {
  	case 0:
  	document.getElementById('planetIdInfo').innerText = "Earth";
    document.getElementById('infoProduces').innerText = "Bad videogames made in a day";
    document.getElementById('infoReputation').innerText = "Placeholder";
    	break;
  	case 1:
  	document.getElementById('planetIdInfo').innerText = "Mars";
    document.getElementById('infoProduces').innerText = "red dust";
    document.getElementById('infoReputation').innerText = "Placeholder";
    	break;
    case 2:
  	document.getElementById('planetIdInfo').innerText = "Asteroid";
    document.getElementById('infoProduces').innerText = "Placeholder";
    document.getElementById('infoReputation').innerText = "Placeholder";
    	break;
    case 3:
  	document.getElementById('planetIdInfo').innerText = "Jupiter";
    document.getElementById('infoProduces').innerText = "Placeholder";
    document.getElementById('infoReputation').innerText = "Placeholder";
    	break;
    case 4:
  	document.getElementById('planetIdInfo').innerText = "Saturn";
    document.getElementById('infoProduces').innerText = "Placeholder";
    document.getElementById('infoReputation').innerText = "Placeholder";
    	break;
    case 5:
  	document.getElementById('planetIdInfo').innerText = "Netptun";
    document.getElementById('infoProduces').innerText = "";
    document.getElementById('infoReputation').innerText = "";
    	break;
  	default:
  	document.getElementById('planetIdInfo').innerText = "Uranus";
    document.getElementById('infoProduces').innerText = "Methane :p";
    document.getElementById('infoReputation').innerText = "";
    	break;
	}
}