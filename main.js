var pisoSeleccionado = 7;
var piso = 1;
const primerPiso= 2;
const ultimoPiso= 20;
var direccion = prompt("subes o bajas")
pisoSeleccionado = prompt("a que piso vas?")


if (direccion== "subo") {
for (piso; piso <= ultimoPiso; piso++ ) { 
	console.log("estas en el piso " + piso);
	if (piso == pisoSeleccionado) {
		alert ("llegaste");
	}
}
}
 if (direccion == "bajo") {
	piso= 20;

for (piso; piso >= primerPiso; piso-- ) { 
	console.log("estas en el piso " + piso);
	if (piso == pisoSeleccionado) {
		alert ("llegaste");
	}
}
}