const lista1 = [
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  1,
  6,
  8,
];

const lista1Count = {}

lista1.map(
  function(elem) {
    if (lista1Count[elem]) lista1Count[elem] += 1
    else lista1Count[elem] = 1;
  }
);

//Se le envia como argumento, el obj que se quiere convertir en array
const lista1Array = Object.entries(lista1Count).sort(
  function (valorAcumulado, nuevoValor) {
    return valorAcumulado[1] - nuevoValor[1];
  }
);

const moda = lista1Array[lista1Array.length - 1]
