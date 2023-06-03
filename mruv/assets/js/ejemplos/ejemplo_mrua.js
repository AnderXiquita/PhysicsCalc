var distancia = document.getElementById('distancia');
var vi = document.getElementById('vi');
var vf = document.getElementById('vf');
var tiempo = document.getElementById('tiempo');
var aceleracion = document.getElementById('aceleracion');

//capturar unidades
var unidadx = document.getElementById('unidadx');
var unidadvi = document.getElementById('unidadvi');
var unidadvf = document.getElementById('unidadvf');
var unidadt = document.getElementById('unidadt');

function ejercicio1_mrua() {
    limpiar();

    var delay1 = setInterval(() => {

        if(vf.value!=""){
            clearInterval(delay1);
        }

        vf.value = "280.8";
        unidadvf.options[1].selected = true;

        document.getElementById('tiempo').value = "65";
        unidadt.options[0].selected = true;
    }, 500

    )

}

function ejercicio2_mrua() {
    limpiar();


    var delay2 = setInterval(() => {

        
    if(vf.value!=""){
        clearInterval(delay2);
    }
        vf.value = "0";
        unidadvf.options[0].selected = true;

        document.getElementById('tiempo').value = "65";
        unidadt.options[0].selected = true;

        vi.value = "78";
        unidadvi.options[0].selected = true;
    }, 500

    )
}


function ejercicio3_mrua() {
    limpiar();

    var delay3 = setInterval(() => {

    if(vf.value!=""){
        clearInterval(delay3);
    }
        vf.value = "50";
        unidadvf.options[1].selected = true;

        document.getElementById('tiempo').value = "25";
        unidadt.options[0].selected = true;

        vi.value = "90";
        unidadvi.options[1].selected = true;
    }, 500

    )



}


function ejercicio4_mrua() {
    limpiar();


    var delay4 = setInterval(() => {

        
    if(vf.value!=""){
        clearInterval(delay4);
    }
        aceleracion.value = "1";
        vf.value = "5";
        unidadvf.options[0].selected = true;
    }, 500)


}


function ejercicio5_mrua() {
    limpiar();

    var delay5 = setInterval(() => {
        
    if(vf.value!=""){
        clearInterval(delay5);
    }

        document.getElementById('tiempo').value = "4";
        unidadt.options[0].selected = true;
        vf.value = "220";
        unidadvf.options[1].selected = true;
    }, 500
    )

}

function limpiar() {

    distancia.value = "";
    vi.value = "0";
    vf.value = "";
    tiempo.value = "";
    aceleracion.value = "";


}