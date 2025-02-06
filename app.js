// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let nuevoAmigo = "k";

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}



function agregarAmigo(){
    nuevoAmigo = document.getElementById('amigo').value;
    console.log(nuevoAmigo);
    if (nuevoAmigo == "" || isNaN(nuevoAmigo)){
        asignarTextoElemento("#resultado", "❌ Ingrese un nombre primero");
        setTimeout(() =>{ 
            asignarTextoElemento("#resultado", "");
        }, 2000);
    } else {
        if (nuevoAmigo.includes(listaDeAmigos)){
          return asignarTextoElemento("#resultado", " 🚫 Este nombre ya esta en la lista")
        }else {
             listaDeAmigos.push(nuevoAmigo);
             asignarTextoElemento("#listaAmigos", `${listaDeAmigos}`);
             return nuevoAmigo;
             console.log(listaDeAmigos)
        }
 
        
    }
    
}

