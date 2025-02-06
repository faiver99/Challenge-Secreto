Descripción del Proyecto
Este proyecto es una aplicación interactiva para organizar un sorteo de "Amigo Secreto". Permite a los usuarios agregar nombres de amigos a una lista y, posteriormente, sortear aleatoriamente un nombre de la lista para asignar un "Amigo Secreto" a cada participante.

Estructura del Código
El código está compuesto por las siguientes secciones principales:

Declaración de Variables Globales:

listaDeAmigos: Array que almacena los nombres de los amigos ingresados.
nuevoAmigo: Variable que almacena temporalmente el nombre del amigo recién ingresado.
amigosSorteados: Array que almacena los nombres de los amigos que ya han sido sorteados.
numeroSorteos: Contador que lleva la cuenta de cuántos sorteos se han realizado.
Funciones:

asignarTextoElemento(elemento, texto): Esta función toma un selector de elemento y un texto como parámetros. Busca el elemento en el DOM utilizando el selector proporcionado y asigna el texto al contenido HTML del elemento.

agregarAmigo(): Función que se ejecuta cuando el usuario agrega un nuevo amigo:

Obtiene el valor del input con el ID 'amigo'.
Verifica que el nombre no esté vacío.
Comprueba si el nombre ya existe en listaDeAmigos. Si es así, muestra un mensaje de error temporal.
Si el nombre es nuevo, lo agrega a listaDeAmigos, actualiza la visualización de la lista y limpia el input para futuras entradas.
sortearAmigo(): Función que se ejecuta al realizar el sorteo:

Verifica que listaDeAmigos no esté vacía y que no se hayan realizado sorteos equivalentes al número de amigos en la lista.
Genera un índice aleatorio para seleccionar un amigo de listaDeAmigos.
Comprueba si el amigo seleccionado ya ha sido sorteado. Si es así, llama recursivamente a sortearAmigo() para seleccionar otro.
Si el amigo no ha sido sorteado, muestra su nombre como el "Amigo Secreto", lo agrega a amigosSorteados y actualiza el contador numeroSorteos.
Si todos los amigos ya han sido sorteados, muestra un mensaje indicando que el sorteo ha concluido.
Consideraciones Adicionales
El código incluye validaciones para evitar entradas duplicadas y manejar casos en los que no se ingresen nombres antes de realizar un sorteo.
Se utilizan temporizadores (setTimeout) para mostrar mensajes de error o información al usuario durante un período determinado, mejorando la experiencia del usuario.
La función asignarTextoElemento centraliza la lógica de actualización del DOM, facilitando el mantenimiento y la legibilidad del código.
