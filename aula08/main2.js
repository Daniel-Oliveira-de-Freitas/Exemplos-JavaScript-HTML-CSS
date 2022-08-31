function soma(v1, v2) {
    return v1 + v2;
}

document.getElementById("texto").innerHTML = soma(1, 2); 

function paraCelsius(valorFarhenheit) {
    return (valorFarhenheit - 32) / 1.8;
}
function paraFahrenheit(valorCelsius) {
    return (valorCelsius * 1.8) + 32;
}

var x = paraCelsius(77);
document.getElementById("texto").innerHTML = x;