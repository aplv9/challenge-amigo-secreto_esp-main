let amigos = [];

function agregarAmigo() {
  
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

   // Agregar el amigo a la lista
    amigos.push(nombre);

    // Actualizar la lista de amigos
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        resultado.innerHTML = "<p>No hay amigos para sortear.</p>";
        return;
    }
    
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    resultado.innerHTML = `<p>El amigo sorteado es: <strong>${amigoSorteado}</strong></p>`;
}
