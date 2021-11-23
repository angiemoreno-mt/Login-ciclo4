$(document).ready(function(){
    traerInformacion();
})

function traerInformacion(){
    $.ajax({
        url:"http://144.22.57.76:8080/api/user/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta){
    let myTable="<table><thead><tr><th>Id</th><th>Nombre</th><th>Email</th><th>Contraseña</th></tr></thead>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].id+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#Usuarios").html(myTable);
}