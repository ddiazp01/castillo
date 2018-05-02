
$( document ).ready(function() { 
    
    $('#miboton1').on('click', function(){
    $('#miboton3').removeClass().addClass('btn btn-success');
    $('#miboton3').text('Activado');
    $('#miboton3').on('click', function(){
        $('img').hide();

    
});
});

$('#miboton2').on('click', function(){
    $('#miboton3').off('click');


});



























   
/*
    $('img').on('mousedown ',function() {
        $(this).height(200);
        
 });
 
    
    $('img').on('mouseup mousemove',function() {
           $(this).height(300);
    });
   
  */

/*
    $( "button" ).click(function() {
       // $('#mitexto').text ("Has pinchado en mi boton");//
       // $('#mitexto').css('color','red'); //
       
       //$('img').height('200px');//
         //$('img').toggle();//
        // $('img').fadeOut(1600, function() 
            
       // $('#mitexto').toggleClass('miestilo');//


       $('#micapa').css(
           {
               'font-size':'18px',
               'background-color':'#17a2b8',
               'color' : 'white'
           }
        );

        $(this).removeClass('btn-outline-info').addClass('btn-info');
        
    });

    $( "#miboton1" ).mouseover(function() {
        $('#micapa').append('<p>Este es el nuevo texto</p>');
       

           
     

    });
    $( "#miboton2" ).mouseover(function() {
        $('#micapa > p:last-child').remove();
        
    });
    $( "#miboton3" ).click(function() {
        console.log ($ ('#micapa > p:first-child').text() );
        if ($('#micapa > p:first-child').text() == 'Hoy') {
            $('#micapa > p:first-child').remove();
            
        
        }
        
    });
*/







});

