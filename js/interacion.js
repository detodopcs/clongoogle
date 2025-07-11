


const inputGoogle = document.querySelector(".input-box");
const btnBuscar = document.querySelector(".btn-buscar");
const btnSuerte = document.querySelector(".btn-suerte");

btnBuscar.addEventListener("click",buscarInfo);
btnSuerte.addEventListener("click",buscarInfo);

//FUNCION PARA BUSCAR EN GOOGLE
function buscarInfo(){    
    const textoInput = inputGoogle.value;

    const textoCodificadoParaURL = encodeURIComponent(textoInput);

    const urlBusquedaGoogle = `https://www.google.com/search?q=${textoCodificadoParaURL}`;

     window.location.href = urlBusquedaGoogle;    
 }

 //DETECTAR EL EVENTO AL PRESIONAR EL BOTON ENTER
inputGoogle.addEventListener('keydown', function(event) {            
            if (event.key === 'Enter') {
                buscarInfo();
            }                
        });

