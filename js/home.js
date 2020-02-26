newFunction();

function newFunction() {
    $('.painel button').click(function() {
        $(this).parent().toggleClass('painel-aberto');
       });
}


