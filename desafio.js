//1
function mostrarHola() {
    console.log("¡Hola, mundo!");
  }
  
  mostrarHola();
//2
  function mostrarHolaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
  }
  
  mostrarHolaNombre("Joe");
//3
  function calcularDoble(numero) {
    return numero * 2;
  }
  
  let resultadoDoble = calcularDoble(5);
  console.log(resultadoDoble);
//4
  function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let promedio = calcularPromedio(4, 7, 10);
  console.log(promedio);
//5
  function encontrarMayor(a, b) {
    return a > b ? a : b;
  }
  
  let numeroMayor = encontrarMayor(15, 9);
  console.log(numeroMayor);

  //6
  function cuadrado(numero) {
    return numero * numero;
  }
  
  let resultado = cuadrado(2);
  console.log(resultado);