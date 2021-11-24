function avisoPersonagens() {
    alert("Clique nos nomes dos personagens para ver detalhes sobre eles! ;)");
}
avisoPersonagens();

function escolhaPersonagem() {
    const button = document.getElementById("botaoEscolhaPersonagem");
    button.addEventListener('click', () => {
        while(true) {
            var personagemEscolhido = prompt("Escolha seu Personagem");
            if(personagemEscolhido == 1 || personagemEscolhido == "Draken" || personagemEscolhido == "draken") {
                window.location.href = "./fases_draken/introducao_draken.html";
                break;
            }
            else if ( personagemEscolhido == 2 || personagemEscolhido == "Eve" || personagemEscolhido == "eve") {
                window.location.href = "./fases_eve/introducao_eve.html";
                break;
            }
            else if ( personagemEscolhido == 3 || personagemEscolhido == "Ryon" || personagemEscolhido == "ryon") {
                window.location.href = "./fases_ryon/introducao_ryon.html";
                break;
            }
            else {
                alert('Personagem não existe! Tente escrever algo válido!');
                break;
            }
        }
    });
}
escolhaPersonagem();