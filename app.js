// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// lista de amigos:

let amigos = [];

//Boton para el sorteo

let botonSortear = document.querySelector("#sorteo");

let iconoSorteo = document.querySelector("#iconoSorteo");


//Funcion para agregar amigos:

function agregarAmigo() {
    //Toma el valor del html

    let input = document.querySelector("#amigo");

    //variable para dejar solo el nombre

     let nombre = input.value.trim();

    //comprueba si se escribio un nombre o si está vacio, dejando un mensaje correspondiente
    
    if (nombre === '') {
        alert("Debes ingresar un nombre valido");
        return;
    }
    //funcion para reiniciar peticion si el amigo esta repetido

    if (amigos.includes(nombre)) {
        alert("el amigo ya esta incluido en la lista");
        return;
    }

    //Añade el nombre del amigo a la lista

    amigos.push(nombre);

    //Actualiza la lista

    actualizarLista();

    //Limpia el campo 

    input.value = "";

   
    }

//Funcion para actualizar lista de amigos

function actualizarLista() {

    let lista = document.querySelector("#listaAmigos");

    //Recorre la de amigos y crea un elemento li para cada uno
    
        let listaAmigosHtml = '';
    for (let i = 0; i < amigos.length; i++) {
        listaAmigosHtml += `<li>${amigos[i]}</li>`;
    }
    lista.innerHTML = listaAmigosHtml;

}

//Funcion para el sorteo el amigo secreto

function sortearAmigo() {

    //comprobacion del boton de sorteo

    if (botonSortear.dataset.estado === "reiniciar") {
        reiniciarSorteo();
        return;
    }

    //comprobacion de si hay amigos en la lista

    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    //generacion del amigo secreto a traves de un indice aleatorio mediante la longitud de la lista de amigos

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //generacion del nombre del amigo secreto mediante el indice aleatorio

    let amigoSorteado = amigos[indiceAleatorio];

    //se muestra el resultado

    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    //cambio de la estetica del boton y lo actualiza 

    iconoSorteo.src = "assets/icono-reiniciar.png"
    botonSortear.innerHTML = "Reiniciar sorteo";
    botonSortear.dataset.estado = "reiniciar";
}

//Funcion para reiniciar el sorteo y agregar nuevos amigos

function reiniciarSorteo() {

    //elimina la lista de amigos

    amigos.length = 0;

    //Limpia la lista de amigos generada

    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";

    //reinicia el nombre y habilita el boton

    iconoSorteo.src = "assets/play_circle_outline.png"
    botonSortear.innerHTML = "Sortear amigo";
    botonSortear.dataset.estado = "sortear";
}