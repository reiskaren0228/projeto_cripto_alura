const html = document.querySelector("html");
const textArea = document.querySelector(".js-textarea");
const buttonEncrypt = document.querySelector(".js-encrypt");
const buttonDescrypt = document.querySelector(".js-descrypt");
const display = document.querySelector(".js-display-text");
const buttonCopy = document.querySelector(".js-btn-copy");
const image = document.querySelector(".aside__image").cloneNode(true);
const message = document.querySelector(".aside__message").cloneNode(true);
const buttonFullScreen = document.querySelector(".js-btn-fullscreen");

textArea.focus();

function pasteElement() {
    display.textContent = "";
    display.classList.remove("is-show-text");
    display.appendChild(image);
    display.appendChild(message);

}

function displayText(text) {
    display.classList.add("is-show-text");
    display.textContent = text;
}

function checkLowerCase() {

    const regex = /^([a-záàâãéèêíóôõúç\s])+$/i;
    const lowerCase = regex.test(textArea.value);

    if(lowerCase) {
        encryptText();
        
    } else {
        alert("*** Por favor, digite apenas letras minúsculas e sem caracter ***");
    }
}

function encrypt(match) {
    const keysOfEncrypt = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat",
        "á": "bts",
        "é": "stk",
        "í": "jyoung",
        "ó": "2pm",
        "ú": "exo",
        "à": "seven",
        "ã": "nflying",
        "â": "rose",
        "ê": "b1a4",
        "è": "nct",
        "ô": "got7",
        "õ": "astro",
        "ç": "btob",
    }

    return keysOfEncrypt[match];
}

function scrollPage(ycoord) {
    window.scroll({top: ycoord, behavior: "smooth"});
}

function encryptText() {
    const text = textArea.value;

    if(text != "") {

        const encrypted = text.replace(/[aeiouáàâãéèêíóôõúç]/g, encrypt);
        displayText(encrypted);
        scrollPage(html.scrollHeight);

    }

}

function descrypt(match) {
    const keysOfDescrypt = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u",
        "bts": "á",
        "stk": "é",
        "jyoung": "í",
        "2pm": "ó",
        "exo": "ú",
        "seven": "à",
        "nflying": "ã",
        "rose": "â",
        "b1a4": "ê",
        "nct": "è",
        "got7": "ô",
        "astro": "õ",
        "btob": "ç",
    }
    
    return keysOfDescrypt[match];
}

function descryptText() {
    const text = textArea.value;

    if(text != "") {

        const descrypted = text.replace(/ai|enter|imes|ober|ufat|bts|stk|jyoung|2pm|exo|seven|nflying|rose|b1a4|nct|got7|astro|btob/g, descrypt); 
        displayText(descrypted);
        scrollPage(html.scrollHeight);
    }
}

function copyText() {
    const image = document.querySelector(".aside__image");

    if(!display.contains(image)) {

        navigator.clipboard.writeText(display.textContent).then(() => {
            alert("Texto cópiado para a área de transferência");
            pasteElement();
            pasteText();
            scrollPage(html.scrollHeight - html.scrollHeight);

        })
    
    }

}

function pasteText() {
    
    try {
        textArea.focus();
        textArea.value = "";
        navigator.clipboard.readText().then((clipText) => {
            textArea.value = clipText;
        })

    } catch {
        
        alert("** Error ** Seu navegador não é compativel com a função de colar ou você não deu as permissões necessárias, use o atalho 'CRTL+V' para adicionar o texto cópiado");
    }
                  

}

let fullScreen = false;

function openAndCloseFullScreen(){
    const html = document.querySelector("html");
    const img = document.querySelector(".js-img-fullscreen");

    if(fullScreen) {
        document.exitFullscreen();
        img.src = "img/-robot-artificial.png"
        fullScreen = false;

    } else {
        html.requestFullscreen();
        img.src = "img/robot_open.png"
        fullScreen = true;
    }
}

buttonEncrypt.addEventListener("click", checkLowerCase);
buttonDescrypt.addEventListener("click", descryptText);
buttonCopy.addEventListener("click", copyText);
buttonFullScreen.addEventListener("click", openAndCloseFullScreen);