function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

const lista1 = [
  100,
  200,
  800,
  500,
  890,
  678,
  400000000,
];
lista1.sort();

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(n) {
  if (n % 2 === 0) return true
  else false;
}

let mediana;

if(esPar(lista1)) {
  const elemento1 = lista1[mitadLista1 - 1];
  const elemento2 = lista1[mitadLista1];

  const promedioElementos = calcularMediaAritmetica([elemento1, elemento2,]);
  mediana = promedioElementos;
} else {
  mediana = lista1[mitadLista1];
}
