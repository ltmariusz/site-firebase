// Funkcja do ładowania Google Maps API
function loadGoogleMapsAPI() {
	var script = document.createElement('script');
	script.src = `https://maps.googleapis.com/maps/api/js?key=${config.GOOGLE_MAPS_API_KEY}&callback=initMap`;
	script.defer = true;
	document.head.appendChild(script);
}

// Wywołaj funkcję loadGoogleMapsAPI() po załadowaniu strony
window.onload = loadGoogleMapsAPI;


function wyswietlanie() {

	var szero = document.getElementById("szero");
	var dlug = document.getElementById("dlug");
	var bater = document.getElementById("bater");


	//gdzie jest użytkownik
	//szerokość geograficzna
	var szeroRef = firebase.database().ref().child("latitude");
	szeroRef.on('value', function (datasnapshot) {
		szero.innerText = datasnapshot.val();
	});

	//długoś geograficzna

	var dlugRef = firebase.database().ref().child("longitude");

	dlugRef.on('value', function (datasnapshot) {
		dlug.innerText = datasnapshot.val();
	});

	//Bateria
	var batRef = firebase.database().ref().child("batLevel");

	batRef.on('value', function (datasnapshot) {
		bater.innerText = datasnapshot.val();
	});
	setTimeout("wyswietlanie()", 1000);
}
function init() {
	loadGoogleMapsAPI();
	wyswietlanie();
}

window.onload = init;

window.addEventListener('load', init);
