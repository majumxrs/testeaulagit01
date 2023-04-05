document.addEventListener("click" , showcolor );

document.getElementById("botao").addEventListener("click" , exibenome);

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function exibenome()
{
    let usuario = document.getElementById( "nome" ).value;
    document.getElementById( "mensagem" ).innerHTML = "Meu nome é: " + usuario;
    document.getElementById( "nome" ).value = "";
}

document.getElementById("botao-somar", somar);
function somar()
{
    let numero1 = document.getElementById("numero1").volue;
    let numero2 = document.getElementById("numero2"). volue;
}

