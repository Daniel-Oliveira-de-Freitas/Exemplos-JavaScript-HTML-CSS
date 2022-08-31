const carro = {
  marca: "ford",
  modelo: "ka",
  ano: 2005,
  placa: "ABC-1234",
  buzina: function () {
    alert("Biiiiiiiii");
  },
  completo: function () {
    return (
      "A marca é: " +
      this.marca +
      "<br>" +
      "O modelo é: " +
      this.modelo +
      "<br>"
    );
  },
};

console.log(carro.completo());

document.write(carro.completo());
document.write(carro.placa);
console.log(carro.placa);
