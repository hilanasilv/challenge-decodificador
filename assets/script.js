const textArea = document.querySelector(".input-texto");
const mensagem = document.querySelector(".output-texto");
const botaoCopiar = document.querySelector(".botao_copiar");
const mensagemFlutuante = document.getElementById("mensagemFlutuante");

// Chaves:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";

}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }

    return stringEncriptada;

}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";

}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }

    return stringDesencriptada;

}

//Copia o texto para a área de transferência
function copiarTexto() {
    mensagem.select();
    document.execCommand('copy');
    mostrarMensagemFlutuante("Texto copiado para a área de transferência");
}

//Mostra a mensagem de texto copiado
function mostrarMensagemFlutuante(mensagem) {
    mensagemFlutuante.innerText = mensagem;
    mensagemFlutuante.classList.add("ativo");

    setTimeout(() => {
        mensagemFlutuante.classList.remove("ativo");
    }, 3000);
}