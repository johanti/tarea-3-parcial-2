$(document).ready(function () {

    /* * programar Slider */
    let listaImg = $('#sliderImg img').length;
    let posicionImg = 1;

    $('#sliderImg img').hide();
    $('#sliderImg img:first-child').show(); // Visualizo la 1era imagen

    //Funcion de Delay, para que despues de 4s visualice la siguiente imagen.
    setInterval(function (){
        //posicionImg = posicionImg + 1;         
        //posicionImg++;
        //Evaluamos si ya no hay mas imagenes
        if (posicionImg < listaImg ){
            posicionImg++;
        } else {
            posicionImg = 1;
        }
        $('#sliderImg img').hide();
        $('#sliderImg img:nth-child(' + posicionImg + ')').show();
    }, 4000);

    /*****************************************
     * Boton Toggle
     * ******************************** */
    $('.btn-Toggle').click(function (){
        $('#miMenu').toggle(1500);
    });
});