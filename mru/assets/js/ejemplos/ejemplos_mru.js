// ejemplo mru
var distancia = document.getElementById("distancia");
var velocidad = document.getElementById("velocidad");
var tiempo = document.getElementById("tiempo");


var unidadx = document.getElementById("unidadx");
var unidadv = document.getElementById("unidadv");
var unidadt = document.getElementById("unidadt");

function ejercicio1_mru(){
    limpiar("mru");
    velocidad.value="277";
    tiempo.value="60";
    unidadv.options[0].selected = true;
    unidadx.options[1].selected = true;
    unidadt.options[1].selected = true;
    
  
}


function ejercicio2_mru(){
 
    limpiar("mru")
    distancia.value="90";
    velocidad.value="60";

    unidadv.options[1].selected = true;
    unidadx.options[2].selected = true;
    unidadt.options[2].selected = true;

}


function ejercicio3_mru(){
 
    limpiar("mru")
    distancia.value="50";
    tiempo.value="15";

    
    unidadx.options[2].selected = true;
    unidadt.options[1].selected = true;
    unidadv.options[1].selected = true;
}


function ejercicio4_mru(){
 
    limpiar("mru")
    velocidad.value="343.2";
    tiempo.value="6";

    
    unidadx.options[2].selected = true;
    unidadt.options[0].selected = true;
    unidadv.options[0].selected = true;
}


function ejercicio5_mru(){
 
    limpiar("mru")
    velocidad.value="90";
    tiempo.value="36";

    
    unidadx.options[2].selected = true;
    unidadt.options[2].selected = true;
    unidadv.options[1].selected = true;
}




function limpiar(movimiento){

    if(movimiento = "mru"){
        distancia.value="";
        velocidad.value="";
        tiempo.value="";

    }
   
}