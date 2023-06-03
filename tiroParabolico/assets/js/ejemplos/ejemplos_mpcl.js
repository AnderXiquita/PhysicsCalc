var gravedad = document.getElementById('gravedad');
var angulo = document.getElementById('angulo');
var velocidad_inicial = document.getElementById('velocidad_inicial');
var velocidad_inicialx = document.getElementById('velocidad_inicial_x');
var velocidad_inicialy = document.getElementById('velocidad_inicial_y');
var tiempo = document.getElementById('tiempo');
var tiempo_vuelo = document.getElementById('tiempo_vuelo');
var altura = document.getElementById('altura');
var altura_maxima = document.getElementById('altura_maxima');
var desplazamiento_horizontal = document.getElementById('desplazamiento_horizontal');
var alcance_horizontal = document.getElementById('alcance_horizontal');


var unidadang = document.getElementById("unidad1");
var unidadvi = document.getElementById("unidad2");
var unidadvix = document.getElementById("unidad3");
var unidadviy = document.getElementById("unidad4");
var unidadt = document.getElementById("unidad5");
var unidadtv = document.getElementById("unidad6");
var unidadhi = document.getElementById("unidad7");
var unidadhmax = document.getElementById("unidad8");
var unidaddh = document.getElementById("unidad9");
var unidadah = document.getElementById("unidad10");


function ejercicio1_mpcl() {

    var delay1 = setInterval(() => {    
    if(velocidad_inicial.value!=""){
        clearInterval(delay1);
    } 
    velocidad_inicial.value="30";
    unidadvi.options[0].selected = true;

    angulo.value="48";
    unidadang.options[1].selected = true;
    }, 550)
}


function ejercicio2_mpcl() {

    var delay1 = setInterval(() => {

    if(velocidad_inicial.value!=""){
        clearInterval(delay1);
    } 
    velocidad_inicial.value="200";
    unidadvi.options[0].selected = true;

    alcance_horizontal.value="2500";
    unidadah.options[1].selected = true;
    }, 550)
}


function ejercicio3_mpcl() {

    var delay1 = setInterval(() => {

    if(velocidad_inicial.value!=""){
        clearInterval(delay1);
    } 
    velocidad_inicial.value="80";
    unidadvi.options[0].selected = true;

    angulo.value="30";
    unidadang.options[1].selected = true;
    }, 550)
}


function ejercicio4_mpcl() {

    var delay1 = setInterval(() => {

    if(velocidad_inicial.value!=""){
        clearInterval(delay1);
    } 
    velocidad_inicial.value="110";
    unidadvi.options[0].selected = true;

    angulo.value="35";
    unidadang.options[1].selected = true;
    }, 550)
}