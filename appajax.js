
$( document ).ready(function() { 
    
    $('#plantilla').hide();
    $('#miboton').on('click', function(){
       

        var aux = $('#numpersonas').val();
               $.ajax({
            url: 'https://randomuser.me/api/?results=' + aux,
            dataType: 'json',
            success: function(datos) { 
                $('#personas').empty ();
                $.each(datos.results, function(k,v) {

                         plantilla = $('#plantilla > div').clone();

                         plantilla.find('.col-md-9 > p > b').text(v.name.first + ' ' + v.name.last);
                         plantilla.find('.col-md-9 > p:last-child').html( 
                                        v.email+ "<br>"+
                                        v.phone+ "<br>"+
                                        v.location.city);
                         plantilla.find('.col-md-3 > img').attr('src', v.picture.large);
                        

                            plantilla.show();

                         $('#personas').append(plantilla);


                        
                    
                        

                });

      
            }
            }); 
    });
});



 /* $.ajax({
            url: 'https://randomuser.me/api/?results=' + aux,
            dataType: 'json',
            success: function(datos) { 
                $('#personas').empty ();
                $.each(datos.results, function(k,v) {
                    
                        $('#personas').append(v.name.first + ' ' + v.name.last);
                        $('#personas').append(' ' +v.email);
                        $('#personas').append(' ' +v.location.city);
                        $('#personas').append(' '+v.phone);
                        $('#personas').append('<img class="rounded-circle" src="'+ v.picture.large +'" alt="">');
                        $('#personas').append('<br>');

                });

                console.log(datos);
            }
            }); */
  

                

    
  



























   
