var v1;
var v2
var resultado;
var temp
var resultadoTemp;


function getValor() {
    v1 = document.getElementById("num1").value;
    v2 = document.getElementById("num2").value;
    
}
function getValorTemp() {
    temp = document.getElementById("vTemp").value;
    
}
function soma() {
    getValor();
    resultado = parseInt( v1 ) + parseInt( v2 );
    limpar();
    return  resultado;
}
function subtracao() {
    getValor();
    resultado = parseInt( v1 ) - parseInt( v2 );
    limpar();
    return resultado;
}
function multiplicacao() {
    getValor();
    resultado = parseInt(v1) * parseInt (v2);
    limpar();
    return resultado;
}
function divisao() {
    getValor();
    resultado = parseInt (v1) / parseInt (v2);
    limpar();
    return resultado;
}


function paraCelsius() {
    getValorTemp();
    resultadoTemp = (temp - 32) / 1.8;
    limpar();
    return resultadoTemp;
}
function paraFahrenheit() {
    getValorTemp();
    resultadoTemp = (temp * 1.8) + 32;
    limpar();
    return resultadoTemp;
}

function escolheTemperatura() {
    var escolha = document.getElementById("escolha").value;
    if (escolha == "celsius") {
        paraCelsius();
    } else  if (escolha == "fahrenheit") {
        paraFahrenheit();
    }
    document.getElementById("resultadoTemp").innerHTML = resultadoTemp;

}
function limpar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("vTemp").value = "";
}
function funcoes() {
    var opcao = document.getElementById("opcao").value;
    if (opcao == "soma") {
        soma();
    } else if (opcao == "subtracao") {
        subtracao();
    } else if (opcao == "multiplicacao") {
        multiplicacao();
    }
    else if (opcao == "divisao") {
        divisao();
    }
    document.getElementById("resultado").innerHTML = resultado;
    
}





