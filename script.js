CajaFrase=document.querySelector("textarea");
salida=document.querySelector(".textoDes");

botonEnc=document.querySelector(".boton1");
botonDes=document.querySelector(".boton2");

salidaVacia=document.getElementById("caja0");
salidaLlena=document.getElementById("caja1");

botonEnc.onclick = encriptar;
botonDes.onclick = desencriptar;

fraseDefecto="Ingrese el texto aquí";

letra=["e","i","a","o","u"];
llaves=["enter","imes","ai","ober","ufat"];


function obtenerTexto(){
    return (CajaFrase.value);
}


function mostrarSalida(){
    if(salidaVacia.style.display!="none"){
        salidaVacia.style.display="none";
        salidaLlena.style.display="block";
    }
    if(frase == ""){
        salidaVacia.style.display="block";
        salidaLlena.style.display="none";
    }
}

function encriptar(){
   frase=obtenerTexto();
   if (frase != fraseDefecto){
        for (var i=0; i<5; i++){
            frase=frase.replaceAll(letra[i],llaves[i])
        }
        salida.innerHTML= frase;
        mostrarSalida();
    }
   
   
}

function desencriptar(){
    frase=obtenerTexto();
    if (frase != fraseDefecto){
        for (var i=0; i<5; i++){
            frase=frase.replaceAll(llaves[i],letra[i])
        }
        salida.innerHTML= frase;
        mostrarSalida();
   }
   
}

document.getElementById("copiar").onclick= function(){
navigator.clipboard.writeText(frase)
.then(() => {
    console.log("texto copiado correctamente: " + frase);
})
.catch(err => {
    console.log("error al copiar al portapapeles",err);
})
}

