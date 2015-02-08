function colocarPao(){
    $(".pao").css("opacity", "1");
}

function wrong(){
    errado(1);
    $(".wrong").css("display", "table");
}

function showPao(){
    acertou(1);
    $(".pao-win").css("display", "table");
    for (var i=1; i<=15; i++){
        var leftPos = Math.floor(Math.random() * 100)+0;
        $(".pao-yeah"+i).css("left", leftPos+"%").css("animation", "letthebunsfalldown "+(Math.floor(Math.random() * 20)+10)+"s").css("-webkit-animation", "letthebunsfalldown "+(Math.floor(Math.random() * 20)+10)+"s");
        
    }
}

function acertou(num){
    var acerto = num;
    if (localStorage.getItem("acerto"))
        acerto += parseInt(localStorage.getItem("acerto"));
    localStorage.setItem("acerto", acerto);
    $(".acertos").html(acerto);
}

function errado(num){
    var erro = num;
    if (localStorage.getItem("erro"))
        erro += parseInt(localStorage.getItem("erro"));
    localStorage.setItem("erro", erro);
    $(".erros").html(erro);
}

function noShow(){
    acertou(1);
    $(".pao-lose").css("display", "table");
}

$(function() {
    var tem_pao = Math.floor((3 * Math.random())+1);
    acertou(0);
    errado(0);
    
    if (tem_pao == 1)
        colocarPao();
    
    $(".sim").click(function(){
        if (tem_pao == 1)
            showPao();
        else
            wrong();
    });
    
    $(".nao").click(function(){
        if (tem_pao != 1)
            noShow();
        else
            wrong();
    });
    
    $(".tentar").click(function(){
        location.reload();
    });
});