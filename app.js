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

//funciona
function encriptaTexto(){

    const input = document.querySelector("#input");
    let texto = input.value;
    console.log(codificaLetras(texto));
    colocaTextoEncriptado(texto);

    // texto.textContent = '';

}

//no funciona. averiguar
function desencriptaTexto(){

    const input = document.querySelector("#input");
    let texto = input.value;
    console.log(descodificaLetras(texto));
    colocaTextoDesencriptado(texto);

    // alert("En el futuro voy a desencriptar texto");
}

function copiaTexto(){
    alert("En el futuro voy a copiar texto");
}

/** eventos */
encriptar.addEventListener("click", encriptaTexto);
desencriptar.addEventListener("click", desencriptaTexto);
copiar.addEventListener("click", copiaTexto);

/** otras funciones que voy a utilizar */

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


function descodificaLetras(texto){
    
    texto = texto.split('');

    for(let i = 0 ; i < texto.length ; ++i){
        
        switch(texto[i]){
            
            case 'ai':
                texto[i] = "a";
                break;
            case 'enter':
                texto[i] = "e";
                break;
            case 'imes':
                texto[i] = "i";
                break;
            case 'ober':
                texto[i] = "o";
                break;
            case 'ufat':
                texto[i] = "u";
                break;
        }
    }

    return texto.join('');

}

function colocaTextoEncriptado(texto){
    cuaderno = document.querySelector("#cuaderno");
    cuaderno.textContent = codificaLetras(texto);
}

function colocaTextoDesencriptado(texto){
    cuaderno = document.querySelector("#cuaderno");
    cuaderno.textContent = descodificaLetras(texto);
}