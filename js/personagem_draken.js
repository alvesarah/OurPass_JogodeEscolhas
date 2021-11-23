function faseUm() {
    alert("Digite apenas o número!");
    var escolhaFaseUm = prompt("1 - Caminho da direita\n2 - Caminho da esquerda");
         
    while(escolhaFaseUm != 1 && escolhaFaseUm != 2){

        alert('Escolha invalida');
        escolhaFaseUm = prompt("1 - Caminho da direita\n2 - Caminho da esquerda");
        break;

    }
        
    if(escolhaFaseUm == 1) {
        alert("Você perdeu! Draken seguiu esse caminho e não conseguiu as respostas que procurava.");
        window.location.href = "https://sashamoon.github.io/OurPass_JogodeEscolhas/";
    }
    else if ( escolhaFaseUm == 2) {
        window.location.href = "./segundaFase_draken.html"
    }
    else {
        alert('Escolha um número válido!');
    }
}
   
function faseDois(){
   
    alert("Digite apenas o número!");
    var escolhaFaseDois = prompt("1 - Da casa dela\n2- Da praça onde eu estava a esperando");

    while(escolhaFaseDois != 1 && escolhaFaseDois != 2){

        alert('Escolha invalida');
        escolhaFaseDois = prompt("1 - Caminho da direita\n2 - Caminho da esquerda");
        break; 

    }

    if(escolhaFaseDois == 1) {
        alert("Você perdeu! Draken seguiu esse caminho e não conseguiu as respostas que procurava.");
        window.location.href = "https://sashamoon.github.io/OurPass_JogodeEscolhas/";
    }
    else if ( escolhaFaseDois == 2) {
        window.location.href = "./terceiraFase_draken.html";
    }
    else {
        alert('Escolha um número válido!');
    }

}

function faseTres(){
   
    alert("Digite apenas o número!");
    var escolhaFaseTres = prompt("1 - Impedi-la de me acertar.\n2 - Tentar controlar Ryon com minha habilidade.");

    while(escolhaFaseTres != 1 && escolhaFaseTres != 2){

        alert('Escolha invalida');
        escolhaFaseTres = prompt("1 - Impedi-la de me acertar.\n2 - Tentar controlar Ryon com minha habilidade.");
        break;

    }

    if(escolhaFaseTres == 1) {
        window.location.href = "./escolhaFinal_draken.html";
    }
    else if ( escolhaFaseTres == 2) {
        alert("Você perdeu! Ryon não estava te olhando, logo Eve conseguiu te acertar com o soco.");
        window.location.href = "https://sashamoon.github.io/OurPass_JogodeEscolhas/";
    }
    else {
        alert('Escolha um número válido!');
    }

}

function escolhaFinal(){
   
    alert("Digite apenas o número!");
    var escolhaFinal = prompt("1 - Apagar memória de ambos e morrer\n2 - Tentar matar Ryon e morrer");

    while(escolhaFinal != 1 && escolhaFinal != 2){

        alert('Escolha invalida');
        escolhaFinal = prompt("1 - Caminho da direita\n2 - Caminho da esquerda");
        break; 

    }

    if(escolhaFinal == 1) {
        window.location.href = "./fim_draken.html";
    }
    else if ( escolhaFinal == 2) {
        alert("Você perdeu! Você tentou matar Ryon, porém não conseguiu pois estava muito fraco, você morreu e Eve também.");
        window.location.href = "https://sashamoon.github.io/OurPass_JogodeEscolhas/";
    }
    else {
        alert('Escolha um número válido!');
    }

}
