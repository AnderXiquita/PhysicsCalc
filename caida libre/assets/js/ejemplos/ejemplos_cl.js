var gravedad = document.getElementById('aceleracion');
var tiempo = document.getElementById('tiempo');
var altura = document.getElementById('altura');
var vi = document.getElementById('vi');
var vf = document.getElementById('vf');

var tiempop2 = document.getElementById("tiempo2");
var tiempop1 = document.getElementById("tiempo1");

//capturar unidades
var unidadt = document.getElementById('unidadt');
var unidadh = document.getElementById('unidadh');
var unidadvf = document.getElementById('unidadvf');
var unidadvi = document.getElementById('unidadvi');

function ejercicio1_cl(){
    limpiar_cl();
   


    var delay1 = setInterval(()=>{
        if(tiempo.value!=""){
            clearInterval(delay1);
        }
        document.getElementById('tiempo').value="3";
        unidadh.options[1].selected = true;
        unidadt.options[0].selected = true;
        
    },500
    
    )
  
}

function ejercicio2_cl(){
   limpiar_cl();
   
    var delay2 = setInterval(()=>{
        if(vf.value!=""){
            clearInterval(delay2);
        }
        document.getElementById('vf').value="20";
        unidadh.options[1].selected = true;
        unidadvf.options[0].selected = true;
    },500
    
    )
    
  
}

function ejercicio3_cl(){
    limpiar_cl();
   


    var delay3 = setInterval(()=>{
        if(altura.value!=""){
            clearInterval(delay3);
        }
        altura = document.getElementById('altura').value="90";
        unidadh.options[1].selected = true;
        unidadvf.options[0].selected = true;
        unidadt.options[0].selected = true;
    },500
    
    )
    
  
}


function ejercicio4_cl(){
    limpiar_cl();
   
    var delay4 = setInterval(()=>{
        if(tiempo.value!=""){
            clearInterval(delay4);
        }
        document.getElementById('tiempo').value="7";
        unidadh.options[1].selected = true;
        unidadvf.options[0].selected = true;
        unidadt.options[0].selected = true;
    },500
    
    )
    
  
}

function ejercicio5_cl(){
    limpiar_cl();

    var delay5 = setInterval(()=>{
        if(tiempo.value!=""){
            clearInterval(delay5);
        }
        altura = document.getElementById('altura').value="4";
        document.getElementById('tiempo').value="1";
        document.getElementById('aceleracion').value = "";
        unidadh.options[1].selected = true;
        unidadt.options[0].selected = true;
    },500
    
    )  
  
}

function ejercicio6_cl(){
    limpiar_cl();

    var delay5 = setInterval(()=>{
        if(tiempo.value!=""){
            clearInterval(delay5);
        }
        altura = document.getElementById('altura').value="828";
        unidadh.options[1].selected = true;

        vi.value="5";
        unidadvi.options[0].selected = true;
        
       tiempop1.value="6";
       tiempop2.value="6";
        
    },500
    
    )  
  
}





function limpiar_cl(){
    document.getElementById('aceleracion').value = "9.8";
    document.getElementById('tiempo').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('vi').value = "0";
    document.getElementById('vf').value = "";
    
}