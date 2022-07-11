const precio = parseFloat(200);
var resumen_button = document.getElementById('resumen');
var totalAPagar = document.getElementById("totalAPagar");
var res;
var cantidad;
var selected_index;
totalAPagar.textContent = "Total a pagar: "; // Quiero que este texto quede fijo
resumen_button.onclick = function mostrarTotalAPagar()
{
	cantidad = document.getElementById('cantidad').value;
	selected_index = document.getElementById('categoria').selectedIndex;
	// Chequeo que el campo cantidad esté completo, que sea entero y positivo
	if(cantidad !== '' && cantidad % 1 == 0 && cantidad >= 0){ 
		if(selected_index === 0){
			res = (0.2)*precio*cantidad;
		}
		if(selected_index === 1){
			res = (0.5)*precio*cantidad;
		}
		if(selected_index === 2){
			res = (0.85)*precio*cantidad;
		}
		totalAPagar.textContent = "Total a pagar: $" + res;
	}

}

function borrarDatos(){
	cantidad = document.getElementById('cantidad').value;
	selected_index = document.getElementById('categoria').selectedIndex;
	totalAPagar.textContent = "Total a pagar: ";
}
