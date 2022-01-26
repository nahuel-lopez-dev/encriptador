/** Forma de organización **/
/***** Variables y selectores *****/
/***** Funciones *****/
/***** Eventos *****/

/** Condiciones para el encriptador ** 
 * llaves de encriptación:
 * la letra "a" es convertida para "ai"
 * la letra "e "es convertida para "enter"
 * la letra "i" es convertida para "imes"
 * la letra "o" es convertida para "ober"
 * la letra "u" es convertida para "ufat"
 * 
 * Requisitos:
 * Debe funcionar solo con letras minúsculas (va a necesitar un validador)
 * No deben ser utilizadas letras con acentos ni caracteres especiales
 * Debe ser posible convertir una palabra para la versión encriptada,
 * mientras que también debe poder devolver una palabra encriptada a su
 * versión original
 * Ej: "gato" --> "gaitober"
 */

/** variables y selectores */
const encriptar = document.querySelector("#encriptar");
const desencriptar = document.querySelector("#desencriptar");
const copiar = document.querySelector("#copiar");

/** funciones */

//función para encriptar el texto
//Tiene dentro otras funciones para separar responsabilidades
function encriptaTexto(){

    const input = document.querySelector("#input");
    let texto = input.value;
    colocaTextoEncriptado(texto);
    console.log(codificaLetras(texto));
    
}
//función para desencriptar el texto
//Tiene dentro otras funciones para separar responsabilidades
function desencriptaTexto(){

    const input = document.querySelector("#input");
    let texto = input.value;
    colocaTextoDesencriptado(texto);
    console.log(descodificaLetras(texto));

}
//función para copiar el texto del textarea
function copiaTexto(){
    alert("En el futuro voy a copiar texto");
}
//función para codificar el texto del input según las llaves de encriptación
function codificaLetras(texto){
    
    texto = texto.split('');

    for(let i = 0 ; i < texto.length ; ++i){
        
        switch(texto[i]){
            
            case 'a':
                texto[i] = "ai";
                break;
            case 'e':
                texto[i] = "enter";
                break;
            case 'i':
                texto[i] = "imes";
                break;
            case 'o':
                texto[i] = "ober";
                break;
            case 'u':
                texto[i] = "ufat";
                break;
        }
    }

    return texto.join('');
}
//función para descodificar el texto del input según las llaves de encriptación
function descodificaLetras(texto){

    let textoDescodificado = texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g,"u" );

    return textoDescodificado;    
}
//función para colocar el texto encriptado en el textarea
function colocaTextoEncriptado(texto){
    cuaderno = document.querySelector("#cuaderno");
    cuaderno.textContent = codificaLetras(texto);
}
//función para colocar el texto desencriptado en el textarea
function colocaTextoDesencriptado(textoDescodificado){
    cuaderno = document.querySelector("#cuaderno");
    cuaderno.textContent = descodificaLetras(textoDescodificado);
}


//función para borrar los datos ingresados en el input

// function limpiarInput(){
    
// }



/***** eventos *****/

//evento generado por el botón encriptar, para encriptar el texto del input
encriptar.addEventListener("click", encriptaTexto);
//evento generado por el botón desencriptar, para desencriptar el texto del input
desencriptar.addEventListener("click", desencriptaTexto);
//evento generado por el botón copiar, para copiar el texto del textarea
copiar.addEventListener("click", copiaTexto);


