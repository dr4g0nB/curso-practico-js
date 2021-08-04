//Cuadrado
console.group('Cuadrado')
const ladoCuadrado = 5,
      perimetroCuadrado = ladoCuadrado * 4,
      areaCuadrado = ladoCuadrado * ladoCuadrado
;

console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}`);
console.log(`El area del cuadrado es: ${perimetroCuadrado}cm^2`);
console.groupEnd();

//Triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6,
      ladoTriangulo2 = 6,
      baseTriangulo = 4,
      alturaTriangulo = 5.5,
      perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo,
      areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
;

console.log(`La altura del triangulo es de: ${alturaTriangulo}cm`);
console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);
console.log(`El perimetro del triangulo es: ${perimetroTriangulo}cm`);
console.log(`El area del triangulo es: ${areaTriangulo}cm^2`);
console.groupEnd();

//Circulo
console.group('Circulos')
const radioCirculo = 4,
      diametroCirculo = radioCirculo * 2,
      PI = Math.PI,
      perimetroCirculo = diametroCirculo * PI,
      areaCirculo = (radioCirculo * radioCirculo) * PI
;

console.log(`El radio del circulo es de: ${radioCirculo}cm`);
console.log(`El diametro del circulo es de: ${diametroCirculo}cm`);
console.log(`El perimetro del circulo es de: ${perimetroCirculo}cm`);
console.log(`El area del circulo es de: ${areaCirculo}cm^2`);
console.groupEnd()