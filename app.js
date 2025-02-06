// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let nuevoAmigo;

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}



function agregarAmigo(){
    nuevoAmigo = document.getElementById('amigo').value;
    console.log(nuevoAmigo);

    if ( nuevoAmigo !== ""){
        if (nuevoAmigo.in(listaDeAmigos)){
            return asignarTextoElemento("#resultado", " 🚫 Este nombre ya esta en la lista, ingrese uno nuevo")
          
    } else {
    
        asignarTextoElemento("#resultado", "❌ Ingrese un nombre primero");
        setTimeout(() =>{ 
            asignarTextoElemento("#resultado", "");
        }, 2000);
    }
    // if (nuevoAmigo === "" || isNaN(nuevoAmigo)){
        
        
    //     c
       
    
}

        listaDeAmigos.push(nuevoAmigo);
        asignarTextoElemento("#listaAmigos", `${listaDeAmigos}`);
        console.log(listaDeAmigos);