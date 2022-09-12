$(function() {
    $("#mostrar").on("click", function() {
        $("#alerta").fadeIn();
    });

    $("#esconder").on("click", function() {
        $("#alerta").fadeOut();
    });

    $("#mudar-cor").on("click", function() {
        var cor = $("#cor").val();
        $("#mensagem").val("Cor alterada!");
        $("#alerta").css("background-color", cor);
    });
});