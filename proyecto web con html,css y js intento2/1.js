class Publicacion{
    constructor(autor,comentario,imagen){
        this.autor = autor;
        this.comentario = comentario;
        this.imagen = imagen;
    }
}

publicaciones = [];
var formulario = document.getElementById("formularioPublicar");
formulario.style = "display:none;";

function mostrarFormulario(){
    formulario.style = "display:flex;";
}
function Cerrar(){
    formulario.style = "display:none;";
    document.getElementById("autor").value=" ";
    document.getElementById("comentarioPublicacion").value=" ";
    document.getElementById("rutaImagen").value=" ";
}
function verificar(){
    var autor = document.getElementById("autor").value;
    var comentario = document.getElementById("comentarioPublicacion").value;
    var imagen = document.getElementById("rutaImagen").value;
    if(autor.length === 0){
        alert("Tiene que rellenar el bien espacio autor");
    }else if(autor== parseInt(autor)){
        alert("El nombre no puede ser solo numeros");
    }
    else if(comentario.length===0){
        alert("Debes completar de manera correcta tambien el comentario");
    }
    else if(comentario== parseInt(comentario)){
        alert("El nombre no puede ser solo numeros");
    }
    else if(imagen.length === 0){
        alert("Tiene que rellenar la URL");
    }
    else if(imagen== parseInt(imagen)){
        alert("El nombre no puede ser solo numeros");
    }
    else if(autor.length === 0 || imagen.length === 0) {
        alert("Falta el nombre y la URL");
    }
    else{
        crearPublicacion(autor,comentario,imagen);
    }
}



function activar(){
    document.getElementById("boton").style =" color: rgb(165, 14, 14);";
}

function desactivar(){
    document.getElementById("boton").style ="color: rgb(10,0,10);";
}


function crearPublicacion(autor,comentario,imagen){
    autor = autor;
    comentario = comentario;
    imagen = imagen;

    const publicacionObjeto = new Publicacion(autor,comentario,imagen);
    
    document.getElementById("muroPublicaciones").innerHTML+=(`
        <div class="cajaPublicacion">
            <p class="usuario"><i class="icon-user-circle-o"></i> ${publicacionObjeto.autor}</p>
            <p class="comentario">${publicacionObjeto.comentario}</p>
            <img src="${publicacionObjeto.imagen}">
            <span class="corazon">
                <button class="icon-heart puntos" onclick="activar();" ondblclick="desactivar();" id="boton">
                </button>
            </span>
        </div>
    `);
    Cerrar();
}
