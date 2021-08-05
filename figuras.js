//Cuadrado
function perimetroCuadrado(lado) {
  return lado * 4
}

function areaCuadrado(lado) {
  return lado * lado
}

//Triangulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(altura, base) {
  return (base * altura) / 2;
}

//Circunferencia
const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio)
  return diametro * PI
}

function areaCirculo(radio) {
  return (radio * radio) * PI
}
