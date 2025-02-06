// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let nuevoAmigo;
let amigosSorteados = [];
let numeroSorteos = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}



function agregarAmigo(){
    nuevoAmigo = document.getElementById('amigo').value;
    // console.log(nuevoAmigo);
    if ( nuevoAmigo !== ""){
        if (listaDeAmigos.includes(nuevoAmigo)){
            asignarTextoElemento("#resultado", " 🚫 Este nombre ya esta en la lista, ingrese uno nuevo")
            setTimeout(() =>{ 
                asignarTextoElemento("#resultado", "");
            }, 3000);
        }else{
            listaDeAmigos.push(nuevoAmigo);
            asignarTextoElemento("#listaAmigos", `${listaDeAmigos}`);
            document.getElementById('amigo').value="";  
            // console.log(listaDeAmigos);
        }
        
    } else {
        alert("❌ Ingrese un nombre primero")
        // asignarTextoElemento("#resultado", "❌ Ingrese un nombre primero");
        setTimeout(() =>{ 
            asignarTextoElemento("#resultado", "");
        }, 3000);
    }
    return listaDeAmigos;
}

function sortearAmigo() {

    if ( listaDeAmigos.length !== 0 && numeroSorteos !== listaDeAmigos.length){
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        let elementoAleatorio = listaDeAmigos[indiceAleatorio];
        if (amigosSorteados.includes(elementoAleatorio)){
            sortearAmigo();
        } else {
            asignarTextoElemento("#resultado",`Tu amigo(a) secreto es ${elementoAleatorio}`);
            amigosSorteados.push(elementoAleatorio);
            numeroSorteos ++;
            return numeroSorteos;
        } 
        
        
    } else {
        if (listaDeAmigos.length == 0){
            asignarTextoElemento("#resultado", "!🥶ingrese los nombres de sus amigos primero!");
            setTimeout (() => {
                asignarTextoElemento("#resultado", "");
            }, 3000)
        } else {
            asignarTextoElemento("#resultado", "✅ Ya sorteaste todos tus amigos")
        }
        
    }
    
}


