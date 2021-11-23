function validarespacios(){
    if($('#name').val().length == 0 || $('#email').val().length == 0 || $('#password').val().length == 0 || $('#passwordSegunda').val().length == 0){
        console.log("Todos los deben ser rellenados");
        alert("Todos los campos deben ser rellenados");
    }

    else{
        console.log("Todos los campos han sido completos");
        validarcontraseña();
        
    }
}

function validarcontraseña(){
    if($('#password').val() == $('#passwordSegunda').val()){
        console.log("las contraseñas son iguales");
        guardarInformacion();
    }
    else{
        alert("Las contraseñas deben ser iguales");
        console.log("las contraseñas false");
    }
}

function guardarInformacion(){
    let var2 = {
        name:$("#name").val(),
        email:$("#email").val(),
        password:$("#password").val()
    };

    $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        url:"http://144.22.57.76:8080/api/user/new",
    
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },
    
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}