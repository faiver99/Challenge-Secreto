var miLista = ['elemento1', 'elemento2', 'elemento3', 'elemento4', 'elemento5'];

// Función para seleccionar una posición aleatoria
function obtenerElementoAleatorio(lista) {
    var indiceAleatorio = Math.floor(Math.random() * lista.length);
    return lista[indiceAleatorio];
}

// Obtener un elemento aleatorio
var elementoAleatorio = obtenerElementoAleatorio(miLista);


console.log('El elemento seleccionado aleatoriamente es: ' + 