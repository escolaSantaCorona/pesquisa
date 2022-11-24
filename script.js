$(document).ready(function () {
    $("#quantidade-filhos").change(function () {
        if ($(this).val() == "1") {
            $('#filho1').show();
            $('#filho2').hide();
            $('#filho3').hide();
            $('#filho4').hide();
        } else if ($(this).val() == "2") {
            $('#filho1').show();
            $('#filho2').show();
            $('#filho2').attr('required', '');
            $('#filho2').attr('data-error', 'Esse campo é obrigatório.');
            $('#filho3').hide();
            $('#filho4').hide();
        } else if ($(this).val() == "3") {
            $('#filho1').show();
            $('#filho2').show();
            $('#filho3').show();
            $('#filho4').hide();
        } else if ($(this).val() == "4") {
            $('#filho1').show();
            $('#filho2').show();
            $('#filho3').show();
            $('#filho4').show();
        }else {
            $('#filho1').hide();
            $('#filho2').hide();
            $('#filho3').hide();
            $('#filho4').hide();
        }
    });
    $("#seeAnotherField").trigger("change");
    $('#filho1').hide();
    $('#filho2').hide();
    $('#filho3').hide();
    $('#filho4').hide();


});

const form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        alert('QUESTIONARIO ENVIADO COM SUCESSO, OBRIGADO PELA PARTICIPAÇÃO')
        form.reset();
    });
});
