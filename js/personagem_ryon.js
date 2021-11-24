function faseUm() {
    alert("Digite apenas o número da escolha desejada.");
    var escolhaFaseUm = prompt("1 - Voltar para a cidade onde eu acordei no hospital.\n2 - Procurar o amigo que me abandonou.");
         
    while(escolhaFaseUm != 1 && escolhaFaseUm != 2){

        alert('Escolha invalida');
        escolhaFaseUm = prompt("1 - Voltar para a cidade onde eu acordei no hospital.\n2 - Procurar o amigo que me abandonou.");
        break;

    }
        
    if(escolhaFaseUm == 1) {
        window.location.href = "./segundaFase_ryon.html"
    }
    else if ( escolhaFaseUm == 2) {
        alert("Você perdeu! Isso não tem relação com os sonhos...");
        window.location.href = "../game_over.html";
    }
    else {
        alert('Escolha um número válido!');
    }
}

function faseDois() {
    alert("Digite apenas o número da escolha desejada.");
    var escolhaFaseDois = prompt("1 - Uma rua que parece estranhamente familiar.\n2 - O caminho para o hospital.");
         
    while(escolhaFaseDois != 1 && escolhaFaseDois != 2){

        alert('Escolha invalida');
        escolhaFaseDois = prompt("1 - Uma rua que parece estranhamente familiar.\n2 - O caminho para o hospital.");
        break;

    }
        
    if(escolhaFaseDois == 1) {
        window.location.href = "./terceiraFase_ryon.html"
    }
    else if ( escolhaFaseDois == 2) {
        alert("Você perdeu! Ele já esteve no hospital e mesmo assim não se lembrou, por que iria lembrar agora?");
        window.location.href = "../game_over.html";
    }
    else {
        alert('Escolha um número válido!');
    }
}

function faseTres() {
    alert("Digite apenas o número da escolha desejada.");
    var escolhaFaseTres = prompt("1 - Terminar o que começou.\n2 - Deixar isso para lá e não vingar o pai.");
         
    while(escolhaFaseTres != 1 && escolhaFaseTres != 2){

        alert('Escolha invalida');
        escolhaFaseTres = prompt("1 - Terminar o que começou.\n2 - Deixar isso para lá e não vingar o pai.");
        break;

    }
        
    if(escolhaFaseTres == 1) {
        window.location.href = "./fim_ryon.html"
    }
    else if ( escolhaFaseTres == 2) {
        alert("Você perdeu! Ryon não tem nada a perder.");
        window.location.href = "../game_over.html";
    }
    else {
        alert('Escolha um número válido!');
    }
}