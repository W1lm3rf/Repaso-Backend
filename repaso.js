

let prueba2 = ["manzana","sandia","mango","pera"]
//borrar un dato del vector
console.log(prueba2);
//.pop elimina el ultimo dato del vector
prueba2.pop()
console.log(prueba2);
//.push agrega un dato al final del vector
prueba2.push("Piña")
console.log(prueba2);
//.shift elimina el primer elemento del arreglo
prueba2.shift()
console.log(prueba2);

//muestra la pisicion de un dato en el arreglo
console.log(prueba2.indexOf("mango"));
//muestra si en el arreglo existe un dato determinado
console.log(prueba2.includes("piña")); 

let numerosinfinitos = [];

while (true) {
    let numero = prompt("Ingrese un numero: ");
    
    
    if (numero === "0") {
        numerosinfinitos.push(numero);
        console.log(numerosinfinitos);
        break;
    }
    numerosinfinitos.push(numero);
    console.log(numerosinfinitos);
}
