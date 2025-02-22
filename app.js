let amigos =[];
function agregarAmigos() {
    const inputAmigo = document.getElementById ('amigo');
    const nombreAmigo = inputAmigo.ariaValueMax.trim();

    if (nombre == ""){
        alert ("Porfavor, inserte un nombre");
        return;
    }
    if (amigos.includes(nombreAmigo)){
        alertr (`El nombre ${nombreAmigo}` ya esta en la lista);
        return;
    }
    amigos.push(nombreAmigo);

    inputAmigo.ariavalu = "";

    actualizarLista();
}
