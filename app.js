// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

const listaDeAmigos = [];
const amigosSorteados = [];
let numeroSorteos = 0;

/**
 * Asigna texto a un elemento del DOM.
 * @param {string} selector - Selector del elemento en el DOM.
 * @param {string} texto - Texto a asignar al elemento.
 */

function asignarTextoElemento(selector, texto) {
    const elementoHtml = document.querySelector(selector);
    if (elementoHtml) {
        elementoHtml.innerHTML = texto;
    } else {
        console.error(`Elemento con selector "${selector}" no encontrado.`);
    }
}

/**
 * Muestra un mensaje temporal en el elemento especificado.
 * @param {string} selector - Selector del elemento en el DOM.
 * @param {string} mensaje - Mensaje a mostrar.
 * @param {number} duracion - Duración en milisegundos del mensaje.
 */

function mostrarMensajeTemporal(selector, mensaje, duracion = 3000) {
    asignarTextoElemento(selector, mensaje);
    setTimeout(() => {
        asignarTextoElemento(selector, '');
    }, duracion);
}

/**
 * Agrega un nuevo amigo a la lista de amigos.
 */
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo ? inputAmigo.value.trim() : '';

    if (nombreAmigo) {
        if (listaDeAmigos.includes(nombreAmigo)) {
            mostrarMensajeTemporal('#resultado', '🚫 Este nombre ya está en la lista, ingrese uno nuevo');
        } else {
            listaDeAmigos.push(nombreAmigo);
            asignarTextoElemento('#listaAmigos', listaDeAmigos.join(', '));
            inputAmigo.value = '';
        }
    } else {
        alert('❌ Ingrese un nombre primero');
    }
}

/**
 * Realiza el sorteo de un amigo secreto.
 */
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        mostrarMensajeTemporal('#resultado', '🥶 Ingrese los nombres de sus amigos primero!');
        return;
    }

    if (numeroSorteos >= listaDeAmigos.length) {
        asignarTextoElemento('#resultado', '✅ Ya sorteaste todos tus amigos');
        return;
    }

    let elementoAleatorio;
    do {
        const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        elementoAleatorio = listaDeAmigos[indiceAleatorio];
    } while (amigosSorteados.includes(elementoAleatorio));

    asignarTextoElemento('#resultado', `Tu amigo(a) secreto es ${elementoAleatorio}`);
    amigosSorteados.push(elementoAleatorio);
    numeroSorteos++;
}

