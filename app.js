//FUNCIONES

function añadir(){

   //VARIABLES
    let entradas = document.getElementById("amigo");
    let texto = entradas.value.trim();

    //condicional
    if (texto !== ""){
        //GENERA LA LISTA
        let lista = document.getElementById("listaAmigos");
        //CREA UN NUEVO ELEMENTO PARA AGREGAR EN LISTA
        let nuevoElemeneto = document.createElement("li");
        nuevoElemeneto.textContent = texto;
        lista.appendChild(nuevoElemeneto);
        //limpiamos el cuadro de texto donde se ingresan los nombre
        entradas.value = "";
    } else {
        alert ("Por favor, ingrese un nombre")
        
    }

    

}

function sortearAmigo(){
    //VARIABLES

    //obtenemos todos los nombre de la lista
    let lista = document.querySelectorAll("#listaAmigos li");
   

    //CONDICIÓN

    //Comproamos que la lista no esté vacia
    if (lista.length === 0){
        alert("Aún no has agregado ningún nombre de tus amigos");
        return;
    }

        //elige un nombre aleatorio
    let indiceAleatorio = Math.floor(Math.random() * lista.length);
        //obtiene el texto de <li>
    let amigoSeleccionado = lista[indiceAleatorio].textContent;

        
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";


    let nuevoElemeneto = document.createElement("li");
        nuevoElemeneto.textContent = `El amigo sorteado es: ${amigoSeleccionado}`;

        //seleccion del amigo secreto
        resultadoLista.appendChild(nuevoElemeneto);


    // Resetear todo después de 5 segundos
    setTimeout(() => {
        document.getElementById("listaAmigos").innerHTML = ""; // Borra la lista de amigos
        resultadoLista.innerHTML = ""; // Borra el resultado
        document.getElementById("amigo").value = ""; // Limpia el input
    }, 5000); // 5000ms = 5 segundos

    }


