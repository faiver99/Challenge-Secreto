# Descripción del Proyecto

Este proyecto es una aplicación interactiva para organizar un sorteo de "Amigo Secreto". Permite a los usuarios agregar nombres de amigos a una lista y, posteriormente, sortear aleatoriamente un nombre de la lista para asignar un "Amigo Secreto" a cada participante.

## Estructura del Código

El código está compuesto por las siguientes secciones principales:

### Declaración de Variables Globales

- **`listaDeAmigos`**: <u>Array que almacena los nombres de los amigos ingresados.</u>
- **`nuevoAmigo`**: <u>Variable que almacena temporalmente el nombre del amigo recién ingresado.</u>
- **`amigosSorteados`**: <u>Array que almacena los nombres de los amigos que ya han sido sorteados.</u>
- **`numeroSorteos`**: <u>Contador que lleva la cuenta de cuántos sorteos se han realizado.</u>

### Funciones

#### `asignarTextoElemento(elemento, texto)`

<u>Esta función toma un selector de elemento y un texto como parámetros. Busca el elemento en el DOM utilizando el selector proporcionado y asigna el texto al contenido HTML del elemento.</u>

#### `agregarAmigo()`

<u>Función que se ejecuta cuando el usuario agrega un nuevo amigo:</u>

1. <u>Obtiene el valor del input con el ID 'amigo'.</u>
2. <u>Verifica que el nombre no esté vacío.</u>
3. <u>Comprueba si el nombre ya existe en `listaDeAmigos`. Si es así, muestra un mensaje de error temporal.</u>
4. <u>Si el nombre es nuevo, lo agrega a `listaDeAmigos`, actualiza la visualización de la lista y limpia el input para futuras entradas.</u>

#### `sortearAmigo()`

<u>Función que se ejecuta al realizar el sorteo:</u>

1. <u>Verifica que `listaDeAmigos` no esté vacía y que no se hayan realizado sorteos equivalentes al número de amigos en la lista.</u>
2. <u>Genera un índice aleatorio para seleccionar un amigo de `listaDeAmigos`.</u>
3. <u>Comprueba si el amigo seleccionado ya ha sido sorteado. Si es así, llama recursivamente a `sortearAmigo()` para seleccionar otro.</u>
4. <u>Si el amigo no ha sido sorteado, muestra su nombre como el "Amigo Secreto", lo agrega a `amigosSorteados` y actualiza el contador `numeroSorteos`.</u>
5. <u>Si todos los amigos ya han sido sorteados, muestra un mensaje indicando que el sorteo ha concluido.</u>

## Consideraciones Adicionales

- <u>El código incluye validaciones para evitar entradas duplicadas y manejar casos en los que no se ingresen nombres antes de realizar un sorteo.</u>
- <u>Se utilizan temporizadores (`setTimeout`) para mostrar mensajes de error o información al usuario durante un período determinado, mejorando la experiencia del usuario.</u>
- <u>La función `asignarTextoElemento` centraliza la lógica de actualización del DOM, facilitando el mantenimiento y la legibilidad del código.</u>


Eres libre de dejar comentarios.



