let listaDeNumerosSorteados = []; 
let numeroLimite = 10;
let numeroSecreto = geralNumeroAleatorio();
let tentativas = 1
let 
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha o número de 1 a 10';

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    respomsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1:2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Ecolha o número entre 1 e 10');
}

exibirMensagemInicial();

function verficarChute() {
    let chute = document.querySelector('input').value;
    console.log (chute==numeroSecreto);

    if (chute == numeroSecreto) {
        extibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa =tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriiu o número secreto com ${tentativas} tentativas!`; 
        exibirTextoNaTela('p', 'Você descobriiu o número secreto com 5 tentativas!');   
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else (chute>numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor');
    } else{
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
    //tentativas = tentativas + 1;
    tentativas++
    limparCampo();

}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == 3){
        listaDeNumerosSorteados=[];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled')
}