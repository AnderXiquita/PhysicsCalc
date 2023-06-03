function validarFormulario() {
    var comentario = document.getElementById("comments").value;
    if (comentario == "") {
        location.reload();
        return false;
    } else {
        return true;
    }
}

function enviarFormulario() {

    if (validarFormulario() == true) {

        var formulario = document.getElementById("formEmail");
        formulario.submit();
    }
}