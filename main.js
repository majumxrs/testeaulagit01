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

document.getElementById("botao-somar").addEventListener("click" , somar);

function somar()
{
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2"). value;
    document.getElementById( "resultado1" ).innerHTML = parseFloat(numero1) + parseFloat(numero2) ;
}

document.getElementById("botao-dividir").addEventListener("click" , dividir);
function dividir()
{
    let numero3 = document.getElementById("numero3").value;
    let numero4 = document.getElementById("numero4"). value;
    document.getElementById( "resultado2" ).innerHTML = parseFloat(numero3) / parseFloat(numero4) ;
}

document.getElementById("botao-multiplicar").addEventListener("click" , multiplicar);

function multiplicar()
{
    let numero5 = document.getElementById("numero5").value;
    let numero6 = document.getElementById("numero6"). value;
    document.getElementById( "resultado2" ).innerHTML = parseFloat(numero5) * parseFloat(numero6) ;
}





document.getElementById("botao-subtrair").addEventListener("click" , somar);

function somar()
{
    let numero7 = document.getElementById("numero7").value;
    let numero8 = document.getElementById("numero8"). value;
    document.getElementById( "resultado4" ).innerHTML = parseFloat(numero7) + parseFloat(numero8) ;
}

