function validarespacios(){
    if($('#email').val().length == 0 || $('#password').val().length == 0){
        console.log("Todos los deben ser rellenados");
        alert("Todos los campos deben ser rellenados");
    }

    else{
        console.log("Todos los campos han sido completos");
        validardatos();
        
    }
}

function validardatos(){
    let TextUsuario = document.getElementById("email").value;
    let TextPassword = document.getElementById("password").value;
    console.log(TextUsuario);
    console.log(TextPassword);
        
            $.ajax({
                url:"http://144.22.57.76:8080/api/user/"+TextUsuario+"/"+TextPassword,
                type:"GET",
                datatype:"JSON",
                success:function(respuesta){
                    if(respuesta.name == "NO DEFINIDO" ){
                        alert("Usuario y/o Contraseña no coninciden porfavor intentalo nuevamente");
                        console.log("No se encontro Usuario");
                        window.location.reload()
                    }
                    else{
                        console.log(respuesta.id);
                        console.log(respuesta.name);
                        console.log(respuesta.password);
                        console.log(respuesta.email);
                        alert("Bienvenido "+respuesta.name);
                        redireccionar();
                    }
                }
            })
}

function redireccionar(){
    window.location="html/inicio.html";
  } 