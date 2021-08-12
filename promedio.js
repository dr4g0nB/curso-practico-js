function calcularMediaAritmetica(lista) {
  //let sumaLista = 0;

  //for(let i = 0; i < lista.length; i++) {
    //sumaLista = sumaLista + lista[i];
  //}
  //.reduce() -> Recibe como argumento una funcion y suma cada uno de los elementos
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}
