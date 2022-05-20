var botonCambioTema = document.querySelector("#toggle-theme");

botonCambioTema.addEventListener("click",function(){
  document.body.classList.toggle("dark-theme");
})

function encriptar(event){
  event.preventDefault();
  let texto = entradaTexto.value;
  entradaTexto.value = "";
  if (!/^([a-z,\s,])*$/.test(texto)){
    alert("Hay mayusculas, acentos, numeros o simbolos especiales en alguna parte del texto. Intentelo nuevamente")
  } else {
    console.log(texto);
    if(texto.length == 0){
      mensaje.value = "";
      copiar.setAttribute("hidden", true);
      mostrarSalida();
    } else {
      mensaje.value = codificar(texto);
      ocultarSalida();
      copiar.removeAttribute("hidden");
    }
  } 
}

function desencriptar(event){
  event.preventDefault();
  let texto = entradaTexto.value;
  entradaTexto.value = "";
  if(!/^([a-z,\s,])*$/.test(texto)){
    alert("Hay mayusculas, acentos, numeros o simbolos especiales en alguna parte del texto. Intentelo nuevamente")
  } else {
    if(texto.length == 0){
      mensaje.value = "";
      copiar.setAttribute("hidden", true);
      mostrarSalida();
    }else {
      mensaje.value = decodificar(texto);
      ocultarSalida();
      copiar.removeAttribute("hidden");
    }
  }
}

function codificar(valor){
  let resultado = "";
  for(let i of valor){
    switch(i){
      case "e" : resultado += "enter"; 
      break;
      case "i" : resultado += "imes"; 
      break;
      case "a" : resultado += "ai"; 
      break;
      case "o" : resultado += "ober"; 
      break;
      case "u" : resultado += "ufat"; 
      break;
      default : resultado += i; 
      break;
    }
  } return resultado;
}

function error() {
  alert("codificación invalida");
  throw new SyntaxError('codificación inválida')
}


function decodificar(valor){
  let resultado = "";
  for(let i = 0; i < valor.length;){
    switch(valor[i]){
      case "e" : if(valor[i + 4] === "r"){
        resultado += valor[i];
        i += 5;
      } else {
        error();
      }
      break;
      case "i" : if(valor[i + 3] === "s"){
        resultado += valor[i];
        i += 4;
      } else{
       error();
      }
      break;
      case "a" : if(valor[i + 1] === "i"){
        resultado += valor[i];
        i += 2;
      } else {

        error();
      }
      break;
      case "o": if(valor[i + 3] === "r"){
        resultado += valor[i];
        i += 4;
      } else {
       error();
      }
      break;
      case "u" : if(valor[i + 3] === "t"){
        resultado += valor[i];
        i += 4;
      } else{
       error();
      }
      break;
      default: resultado += valor[i++];
    }
  } return resultado;
}

function copiarPortapapeles() {    
  mensaje.select();
  document.execCommand('copy');
  mensaje.value = "";
  copiar.setAttribute("hidden", true);
  mostrarSalida();
  alert("Copied!");
}

function ocultarSalida(){ 
  munieco.classList.add("ocultar");
  noMensaje.classList.add("ocultar");
  ingresaTexto.classList.add("ocultar");
  mensaje.removeAttribute("hidden");
}

function mostrarSalida(){
  munieco.classList.remove("ocultar");
  noMensaje.classList.remove("ocultar");
  ingresaTexto.classList.remove("ocultar");
  mensaje.setAttribute("hidden", true);
}

let entradaTexto = document.querySelector("#entradaTexto");

let codificarBtn = document.querySelector("#encriptarBtn");
codificarBtn.addEventListener("click",encriptar);

let decodificarBtn = document.querySelector("#desencriptarBtn");
decodificarBtn.addEventListener("click",desencriptar);

let copiar = document.querySelector("#copiar");
copiar.addEventListener("click",copiarPortapapeles);

let mensaje = document.querySelector("#mensaje");
let munieco = document.querySelector("#munieco");
let noMensaje = document.querySelector(".noMensaje");
let ingresaTexto = document.querySelector(".ingresaTexto");

