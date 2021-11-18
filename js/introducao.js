function escolhaPersonagem() {
    const button = document.getElementById("botaoEscolhaPersonagem");
    button.addEventListener('click', () => {
        while(true) {
            var personagemEscolhido = prompt("Escolha seu Personagem");
            if(personagemEscolhido == 1) {
                draken();
                break;
            }
            else if ( personagemEscolhido == 2) {
                eve();
                break;
            }
            else if ( personagemEscolhido == 3) {
                ryon();
                break;
            }
            else {
                alert('Personagem não existe!');
            }
        }
    });
}
escolhaPersonagem();