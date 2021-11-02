/////////////// ORTOPEDIC ///////////////

//GET//
function traerInformacionOrtopedic(){
    $.ajax({
        datatype:"JSON",
        url:"http://129.151.118.37:8080/api/Ortopedic/all",
        type:"GET",

        success:function(response){
    
            $("#resultadoOrtopedic").empty();
            
            for(i=0;i<response.length;i++){
                console.log(response[i]);
                $("#resultadoOrtopedic").append("<tr>");                
                $("#resultadoOrtopedic").append("<td>"+response[i].name+"</td>");
                $("#resultadoOrtopedic").append("<td>"+response[i].brand+"</td>");
                $("#resultadoOrtopedic").append("<td>"+response[i].year+"</td>");
                $("#resultadoOrtopedic").append("<td>"+response[i].description+"</td>");
                $("#resultadoOrtopedic").append('<td><button onclick="borrarInformacionOrtopedic('+response[i].id+')">Borrar</button></td>');
                $("#resultadoOrtopedic").append('<td><button onclick="obtenerItemEspecifico('+response[i].id+')">Cargar</button></td>');
                $("#resultadoOrtopedic").append("<tr>");                
            }
        },

        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}

//POST//
function guardarInformacionOrtopedic(){
    let infoOrtopedic = {
        name:$("#Oname").val(),
        brand:$("#Obrand").val(),
        year:$("#Oyear").val(),
        description:$("#Odescription").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(infoOrtopedic),
        url:"http://129.151.118.37:8080/api/Ortopedic/save",
       
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

//GET especific//
function obtenerItemEspecifico(idElemento){

    $.ajax({
        dataType: 'json',
        url:"http://129.151.118.37:8080/api/Ortopedic/"+idElemento,
        type: 'GET',
    
        success:function(response){
            console.log(response);
            $("#Oname").val(response.name);
            $("#Obrand").val(response.brand);
            $("#Oyear").val(response.year);
            $("#Odescription").val(response.description);
        },
    
        error: function(jqXHR, textStatus, errorThrown) {       
        }
    });
}

//PUT//
function actualizarInformacionOrtopedic(idElemento){
    let myData={
        id:idElemento,
        name:$("#Oname").val(),
        brand:$("#Obrand").val(),   
        year:$("#Oyear").val(),
        description:$("#Odescription").val()
    };
    
    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://129.151.118.37:8080/api/Ortopedic/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",

        success:function(response){
            $("#resultadoOrtopedic").empty();
            $("#Oname").val(),
            $("#Obrand").val(),
            $("#Oyear").val(),
            $("#Odescription").val()
            traerInformacionOrtopedic();
            alert("se ha Actualizado correctamente")
        },

        error: function(jqXHR, textStatus, errorThrown) {  
        }
    });
}

//DELETE//
function borrarInformacionOrtopedic(idElemento){
    var elemento={
        id:idElemento
    };

    var dataToSend=JSON.stringify(elemento);

    $.ajax({
        datatype:"JSON",
        data:dataToSend,
        url:"http://129.151.118.37:8080/api/Ortopedic/"+idElemento,
        type:"DELETE",
        contentType:"application/JSON",
        
        success:function(response){
            $("#resultadoOrtopedic").empty();
            console.log("Borrado exitoso");            
            alert("Se ha Eliminado.")
            traerInformacionOrtopedic();
        },

        error: function(jqXHR, textStatus, errorThrown) {       
        }
    });
}