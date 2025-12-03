//$("ul").css("color", "red");
//$("#lista").append("<li>Elemento 4</li>");
$(document).ready(function () {

    $('.boton_descripcion').each(function () {
        $(this).on("click", function () {
            $(this).siblings('.descripcion').slideToggle();
        })
    });



    //Lo del ejercicio anterior dentro de la función
    `            $("#lista").toggle();
            if ($("#lista").is(":visible")) {
                $(this).text("Ocultar lista");
            } else {
                $(this).text("Mostrar lista");
            }
`
});