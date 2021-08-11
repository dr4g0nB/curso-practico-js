function calcularDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function priceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;
  
  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

  const totalP = document.getElementById("totalPrice");
  totalP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

//Se le esta enviando un objeto al console.log
//console.log({
//  precioOriginal,
//  descuento,
//  porcentajePrecioConDescuento,
//  precioConDescuento,
//});

//Codigo de Aidan Lorenzo
class Product {
  constructor(name, price, discount, country) {
    this.name = name
    this.price = price
    this.discount = discount
    this.country = country
  }

  computeDiscount() {
    return this.computeTaxes(this.price) - (this.discount/100) * this.computeTaxes(this.price)
  }

  computeTaxes() {
    return this.price + (this.taxesOfCountry(this.country) / 100) * this.price
  }
  
  taxesOfCountry() {
    //economipedia.com/ranking/el-iva-en-el-mundo.html
    //utilizo el IVA reducido de los paises donde esta empresa tiene tiendas

    switch (this.country.toLowerCase()) {
      case "spain":
        return 10
      case "america":
        return 5.5
      case "brazil":
        return 12
      case "portugal":
        return 13
    }
  }

  computeRealPrice() {
    return `The real price of your ${this.name} is ${this.computeDiscount().toFixed(2)}`
  }
}
