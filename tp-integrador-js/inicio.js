const precio = parseFloat(200);
var resumen_button = document.getElementById('resumen');
var totalAPagar = document.getElementById("totalAPagar");
var res;
totalAPagar.textContent = "Total a pagar: ";
var cantidad;
var selected_index;
//var selected_option = categoria.options[categoria.selectedIndex];
//console.log(selected_option);
resumen_button.onclick = function mostrarTotalAPagar()
{
	cantidad = document.getElementById('cantidad').value;
	selected_index = document.getElementById('categoria').selectedIndex;
	if(cantidad !== '' && cantidad % 1 == 0 && cantidad >= 0){ // Chequeo que el campo cantidad esté completo y que sea entero y
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

// ver https://aulasvirtuales.bue.edu.ar/pluginfile.php/571680/mod_resource/content/2/Unidad%209.pdf parte eventos del dom

function borrarDatos(){
	cantidad = document.getElementById('cantidad').value;
	selected_index = document.getElementById('categoria').selectedIndex;
	totalAPagar.textContent = "Total a pagar: ";
}
