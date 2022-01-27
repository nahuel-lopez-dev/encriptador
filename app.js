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

/***** variables y selectores *****/
const input = document.querySelector("#input");
const encriptar = document.querySelector("#encriptar");
const desencriptar = document.querySelector("#desencriptar");
const copiar = document.querySelector("#copiar");

/***** funciones *****/

//ver luego para mejorar el código. como colocar una única validación dentro de encriptarTexto y desencriptarTexto
//función para validar el texto encriptado
function validaTextoParaEncriptar(){
    
    const pattern = new RegExp('^[a-z ]+$');

    if(pattern.test(input.value)){
        encriptaTexto();
    }
}
//función para validar el texto desencriptado
function validaTextoParaDesencriptar(){
    const pattern = new RegExp('^[a-z ]+$');

    if(pattern.test(input.value)){
        desencriptaTexto();
    }
}

//función para encriptar el texto
//Tiene dentro otras funciones para separar responsabilidades
function encriptaTexto(){

    let texto = input.value;
    console.log(codificaLetras(texto));
    colocaTextoEncriptado(texto);
    limpiarInput();
}
//función para desencriptar el texto
//Tiene dentro otras funciones para separar responsabilidades
function desencriptaTexto(){

    let texto = input.value;
    console.log(descodificaLetras(texto));
    colocaTextoDesencriptado(texto);
    limpiarInput();
}
//función para copiar el texto del textarea
function copiaTexto(){
    const copiado = document.querySelector("#cuaderno");
    copiado.select();
    copiado.setSelectionRange(0,99999);
    //método deprecado. Tratar de no usar
    // document.execCommand('copy');
    navigator.clipboard.writeText(copiado.value);   //método más nuevo
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
function limpiarInput(){
    
    return input.value = "";    
}

/***** eventos *****/

//evento generado por el botón encriptar, para encriptar el texto del input
encriptar.addEventListener("click", validaTextoParaEncriptar);
//evento generado por el botón desencriptar, para desencriptar el texto del input
desencriptar.addEventListener("click", validaTextoParaDesencriptar);
//evento generado por el botón copiar, para copiar el texto del textarea
copiar.addEventListener("click", copiaTexto);


