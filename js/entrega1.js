const precioGoku = 50000;
const precioVegeta = 45000;
const precioKrilin = 25000;
const precioMajinBoo = 50000;
const precioBatman = 40000;
const precioSuperman = 40000;

let nombreUsuario = prompt(String("Ingrese su nombre", " "));
let saludo = "¡Hola " + nombreUsuario +"!";
alert(saludo);


function goku(){
    let goku = 50000;
    alert("Goku tiene un valor de "+ precioGoku);
    let cantidad = parseInt(prompt("¿Cuantas figuras de Gokú deseas comprar?"+ parseInt("")));
    while (isNaN(cantidad))
  {
  alert("La cantidad escrita no es válida");
  cantidad = parseInt(prompt("Por favor vuelve a escribir la cantidad de figuras de Gokú que deseas comprar"));
  }

  let cantidadGoku = alert("El valor de las figuras de Gokú es de "+ goku * cantidad);
   
}

function vegeta(){
    let vegeta = 45000;
    alert("vegeta tiene un valor de "+ precioVegeta);
    let cantidad = parseInt(prompt("¿Cuantas figuras de Vegeta deseas comprar?"+ parseInt("")));
    while (isNaN(cantidad))
    {
        alert("La cantidad escrita no es válida");
        cantidad = parseInt(prompt("Por favor vuelve a escribir la cantidad de figuras de Vegeta que deseas comprar"));
    }
    
    let cantidadVegeta = alert("El valor de las figuras de Vegeta es de "+ vegeta * cantidad);

}

function krilin(){
    let krilin = 25000;
    alert("Krilin tiene un valor de "+ precioKrilin);
    let cantidad = parseInt(prompt("¿Cuantas figuras de Krilin deseas comprar?"+ parseInt("")));
    while (isNaN(cantidad))
    {
        alert("La cantidad escrita no es válida");
        cantidad = parseInt(prompt("Por favor vuelve a escribir la cantidad de figuras de Krilin que deseas comprar"));
    }

    let cantidadKrilin = alert("El valor de las figuras de Krilin es de "+ krilin * cantidad);
    
}

function majinBoo(){
    let majinBoo = 50000;
    alert("majin Boo tiene un valor de "+ precioMajinBoo);
    let cantidad = parseInt(prompt("¿Cuantas figuras de Majin boo deseas comprar?"+ parseInt("")));
    while (isNaN(cantidad))
    {
        alert("La cantidad escrita no es válida");
        cantidad = parseInt(prompt("Por favor vuelve a escribir la cantidad de figuras de Majin Boo que deseas comprar"));
    }

    let cantidadKMajinBoo = alert("El valor de las figuras de Krilin es de "+ majinBoo * cantidad);

}

function batman(){
    let batman = 40000;
    alert("Batman tiene un valor de "+ precioBatman);
    let cantidad = parseInt(prompt("¿Cuantas figuras de Batman deseas comprar?"+ parseInt("")));
    while (isNaN(cantidad))
    {
        alert("La cantidad escrita no es válida");
        cantidad = parseInt(prompt("Por favor vuelve a escribir la cantidad de figuras de Batman que deseas comprar"));
    }

    let cantidadBatman = alert("El valor de las figuras de Krilin es de "+ batman * cantidad);

}

function superman(){
    let superman = 40000;
    alert("Superman tiene un valor de "+ precioSuperman);
    let cantidad = parseInt(prompt("¿Cuantas figuras de Krilin deseas comprar?"+ parseInt("")));
    while (isNaN(cantidad))
    {
        alert("La cantidad escrita no es válida");
        cantidad = parseInt(prompt("Por favor vuelve a escribir la cantidad de figuras de Superman que deseas comprar"));
    }

    let cantidadSuperman = alert("El valor de las figuras de Superman es de "+ superman * cantidad);

}
