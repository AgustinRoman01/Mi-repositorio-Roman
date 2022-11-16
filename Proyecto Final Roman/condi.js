///Condicional
let nombreyapellido = prompt("Ingrese su nombre completo");
let edad = parseInt(prompt("Ingrese su edad"));
if (nombreyapellido != "" && edad != "") {
  alert("Su nombre es" + " " + nombreyapellido + " y su edad es" + " " + edad);
} else {
  alert("No ingreso nombre ni edad");
}
let entrada = prompt("Ingresar el numero de productos a comprar");
{
  switch (entrada) {
    case "1":
      alert("Ingresaste cantidad a comprar uno");
      break;
    case "2":
      alert("Ingresaste cantidad a comprar dos");
      break;
    case "3":
      alert("Ingresaste cantidad a comprar tres");
      break;
    case "4":
      alert("Ingresaste cantidad a comprar cuatro");
      break;
    case "5":
      alert("Ingresaste cantidad a comprar cinco");
      break;
    case "6":
      alert("Ingresaste cantidad a comprar seis");
      break;
    default:
      alert("No has ingresado una cantidad posible");
      break;
  }
}
function mercado() {
  let boton1 = document.getElementById("one").value;
  let num1 = parseInt(boton1);
  let quesos, carniceria, vegetales;
  let opc = prompt("Por favor diganos que quiere comprar");
  {
    switch (opc) {
      case "1":
        quesos = num1;
        alert(" el costo del queso es 45000");
        break;

      case "2":
        carniceria = num1;
        alert("el costo de la carniceria es 200500");
        break;

      case "3":
        vegetales = num1;
        alert("el costo de los vegetales es 5000");
        break;
      default:
        alert("escoge uno de los articulos por favor");
    }
  }

  alert(suma);
}

/* let nombreApellido;
let dni;
let numeroProductos;
let precioProductos;

function bienvenida() {
  if (nombreApellido != "" && nombreApellido != null && dni != "") {
    alert(
      "Bienvenido a supermercados Roman, donde cuidamos tu bolsillo de la inflacion"
    );
  } else {
    alert("Ha ocurrido un error debido a que no ingresaste bien los datos");
  }
}
nombreApellido = prompt("Ingrese su nombre y apellido");
dni = parseInt(prompt("Ingrese su nro de dni"));
bienvenida();

numeroProductos = parseInt(
  prompt(
    nombreApellido +
      "," +
      "" +
      "ingrese el numero de productos que desea adquirir"
  )
);
 */

class Producto {
  constructor(id, tipo, precio, marca) {
    (this.id = id),
      (this.tipo = tipo),
      (this.precio = parseFloat(precio)),
      (this.marca = marca);
  }
}

let quesos = new Producto(1, "Queso", "2500", "Sancor");
let quesos2 = new Producto(2, "Queso", "2000", "La Serenisima");
let carnes = new Producto(3, "Carne", "3000", "Buena Carne");
let carnes2 = new Producto(4, "Carne", "2600", "Carne Eco");
let vegetales = new Producto(5, "Vegetales", "300", "Bolsa economica");
let vegetales2 = new Producto(6, "Vegetales", "600", "Bolsa calidad media");
let vegetales3 = new Producto(7, "Vegetales", "1000", "Bolsa calidad premium");

let productos = [
  queso,
  queso2,
  carne,
  carne2,
  vegetales,
  vegetales2,
  vegetales3,
];

let seleccion = productos.find((producto) => producto.id == 2);
let seleccion1 = productos.find((producto) => producto.precio == "3000");
let seleccion2 = productos.find((producto) => producto.marca == "Sancor");
let filtrado = productos.filter((producto) => producto.id >= 3);
let filtrado2 = productos.filter((producto) => producto.precio <= "2500");
