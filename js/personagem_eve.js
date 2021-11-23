function faseUm() {
    alert("Digite apenas o número!");
    var escolhaFaseUm = prompt("1 - Começo a revirar meu quarto a procura de alguma coisa que seja familiar a algo que tenha visto no sonho.\n2 - Tento fechar os olhos e me esforçar para recordar algo do sonho.");
         
    while(escolhaFaseUm != 1 && escolhaFaseUm != 2){

        alert('Escolha invalida');
        escolhaFaseUm = prompt("1 - Começo a revirar meu quarto a procura de alguma coisa que seja familiar a algo que tenha visto no sonho.\n2 - Tento fechar os olhos e me esforçar para recordar algo do sonho.");

    }
        
    if(escolhaFaseUm == 1) {
        alert("Você perdeu! Meus pensamentos estão tão embaralhados que não consigo focar nessa função.");
        window.location.href = "https://sashamoon.github.io/OurPass_JogodeEscolhas/";
    }
    else if ( escolhaFaseUm == 2) {
         window.location.href = "./segundaFase_eve.html"
    }
    else {
        alert('Escolha um número válido!');
    }
}

function faseDois() {
    alert("Digite apenas o número!");
    var escolhaFaseDois = prompt("1 - Procurar alguma evidência na sala.\n2 - Tentar achar alguma evidência no meu quarto.");
         
    while(escolhaFaseDois != 1 && escolhaFaseDois != 2){

        alert('Escolha invalida');
        escolhaFaseDois = prompt("1 - Procurar alguma evidência na sala.\n2 - Tentar achar alguma evidência no meu quarto.");

    }
        
    if(escolhaFaseDois == 1) {
        window.location.href = "./terceiraFase_eve.html"
    }
    else if (escolhaFaseDois == 2) {
        alert("Você perdeu! Eu não consigo encontrar nada no meu quarto e agora?");
        window.location.href = "https://sashamoon.github.io/OurPass_JogodeEscolhas/";
    }
    else {
        alert('Escolha um número válido!');
    }
}

function faseTres() {
    alert("Digite apenas o número!");
    var escolhaFaseTres = prompt("1 - É melhor não lê-lo, vai que não é meu.\n2 - Vou ler só um pouquinho.");
         
    while(escolhaFaseTres != 1 && escolhaFaseTres != 2){

        alert('Escolha invalida');
        escolhaFaseTres = prompt("1 - É melhor não lê-lo, vai que não é meu.\n2 - Vou ler só um pouquinho.");

    }
        
    if(escolhaFaseTres == 1) {
        alert("Você perdeu! É óbvio que você teria que ler o diário, errr.");
        window.location.href = "https://sashamoon.github.io/OurPass_JogodeEscolhas/";
    }
    else if (escolhaFaseTres == 2) {
        window.location.href = "./quartaFase_eve.html"
    }
    else {
        alert('Escolha um número válido!');
    }
}

function faseQuatro() {
    alert("Digite apenas o número!");
    var escolhaFaseQuatro = prompt("1 - Conversar com ele e descobrir mais sobre sua história.\n2 - Parar de falar com ele I-M-E-D-I-A-T-A-M-E-N-T-E.");
         
    while(escolhaFaseQuatro != 1 && escolhaFaseQuatro != 2){

        alert('Escolha invalida');
        escolhaFaseQuatro = prompt("1 - Conversar com ele e descobrir mais sobre sua história.\n2 - Parar de falar com ele I-M-E-D-I-A-T-A-M-E-N-T-E.");

    }
        
    if(escolhaFaseQuatro == 1) {
       window.location.href = "./quintaFase_eve.html"
    }
    else if (escolhaFaseQuatro == 2) {
        alert("Você perdeu! Ainda não entendeu o que está acontecendo?");
        window.location.href = "https://sashamoon.github.io/OurPass_JogodeEscolhas/";
    }
    else {
        alert('Escolha um número válido!');
    }
}

function faseCinco() {
    alert("Digite apenas o número!");
    var escolhaFaseCinco = prompt("1 - Me vingar de Ryon.\n2 - Pensar com clareza e ver se vale a pena correr o risco.");
         
    while(escolhaFaseCinco != 1 && escolhaFaseCinco != 2){

        alert('Escolha invalida');
        escolhaFaseCinco = prompt("1 - Me vingar de Ryon.\n2 - Pensar com clareza e ver se vale a pena correr o risco.");

    }
        
    if(escolhaFaseCinco == 1) {
        alert("Você perdeu! Não é o tipo de pessoa vingativa né?");
        window.location.href = "https://sashamoon.github.io/OurPass_JogodeEscolhas/";
    }
    else if (escolhaFaseCinco == 2) {
        window.location.href = "./escolhaFinal_eve.html"
    }
    else {
        alert('Escolha um número válido!');
    }
}

function escolhaFinal() {
    alert("Digite apenas o número!");
    var escolhaFinal = prompt("1 - Tento pensar em algo que me traga forças.\n2 - Tento me mexer.");
         
    while(escolhaFinal != 1 && escolhaFinal != 2){

        alert('Escolha invalida');
        escolhaFinal = prompt("1 - Tento pensar em algo que me traga forças.\n2 - Tento me mexer.");

    }
        
    if(escolhaFinal == 1) {
       window.location.href = "./fim_eve.html"
    }
    else if (escolhaFinal == 2) {
        alert("Você perdeu! Ela já tentou se mexer e não deu certo, que pena...");
        window.location.href = "https://sashamoon.github.io/OurPass_JogodeEscolhas/";
    }
    else {
        alert('Escolha um número válido!');
    }
}