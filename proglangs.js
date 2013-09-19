function ToOutbox(selectobj){
	var e_proglangs = document.getElementById("proglangs");
	var e_output = document.getElementById("output");
	e_output.innerHTML = "Du har valgt programmeringsspraket " + e_proglangs.options[selectobj.selectedIndex].text;
}

function advarsel() {
	alert("Denne delen kommer snart!");
}