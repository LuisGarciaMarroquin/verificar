function limpiar() {
    var lista = document.querySelectorAll('p');
    if (lista.length != 0) {
        var i = lista.length - 1; // Posiciona en el último párrafo creado
        
    while (i > -1)
    lista[i].parentNode.removeChild(lista[i--]);
} 
else {
    alert("No hay párrafos a eliminar");
     }  
}

function esPar() {
    var numero = document.getElementById("num").value;
    var resultado = paxImpax(numero);
    var parrafo = document.createElement("p");
    var contenido = document.createTextNode("El número " + numero + "es" + resultado);
    parrafo.appendChild(contenido);
    document.body.appendChild(parrafo);
    document.getElementById("num").value = "";
}
    function parImpar (numero) {
    if (numero % 2 == 0) return "par";
    else return "impaz";
    
}