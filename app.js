/** Forma de organización **/
//// /***** Entidades *****/ //no va a ser necesario
/***** Variables y selectores *****/
/***** Funciones *****/
/***** Eventos *****/
/***** Lógica *****/ 

/** variables y selectores */
const encriptar = document.querySelector("#encriptar");
const desencriptar = document.querySelector("#desencriptar");
const copiar = document.querySelector("#copiar");


/** funciones */
function encriptaTexto(){
    alert("En el futuro voy a encriptar texto");
}

function desencriptaTexto(){
    alert("En el futuro voy a desencriptar texto");
}

function copiaTexto(){
    alert("En el futuro voy a copiar texto");
}

/** eventos */
encriptar.addEventListener("click", encriptaTexto);
desencriptar.addEventListener("click", desencriptaTexto);
copiar.addEventListener("click", copiaTexto);