var pisoSeleccionado = 7;
var piso = 1;
const primerPiso= 2;
const ultimoPiso= 20;
var direccion = prompt("subes o bajas")
pisoSeleccionado = prompt("a que piso vas?")


if (direccion== "subes") {
for (piso; piso <= ultimoPiso; piso++ ) { 
	console.log("estas en el piso " + piso);
	if (piso == pisoSeleccionado) {
		alert ("llegaste");
	}
}
}
 if (direccion == "bajas") {
	piso= 20;

for (ultimoPiso; piso >= primerPiso; piso-- ) { 
	console.log("estas en el piso " + piso);
	if (piso == pisoSeleccionado) {
		alert ("llegaste");
	}
}
}