// window.onload = function() {
	var currentURL = window.location.href;
    var savedThing = localStorage.getItem(currentURL);
    if (savedThing) {
    	document.open();
        document.write(savedThing);
        document.close();
    } else {

    }
// }