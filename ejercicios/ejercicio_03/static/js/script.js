//Variables
//const: Variables que no van a ser reasignados
//let: Variables cuyo valor cambiará en el tiempo
//var: Obsoleta, variables que cambian de valor

// Estructura de una función base o tradicional (Las llaves indican el inicio y el fin de una función - cada línea debe de terminar en ";")
function sumar(numero1, numero2){
    return numero1 + numero2;
}

// Estructura con flecha
const restar = (numero1, numero2) => numero1 - numero2;

//Tipos de datos emitidos
const texto = "Hola mundo";
const numero = 42;
const boleano = true;
const nulos = null;

//Arreglos o listas
const personas = ["Dejah", "Jhon", "Carthoris"];

//Objetos literales - Diccionarios en pythn
const persona = {
    nombre: "Dejah Thoris",
    email: "dejah@email.com",
    edad: 20,
    activo: true
};

// Uso de consola para depuración
console.log(persona);
console.log("Texto:", texto);
console.log("Numero:", numero);
console.log("Boleano:", boleano);
console.log("Nulo:", nulos);

console.log("Suma: ", sumar(2,2));
console.log("Resta: ", restar(2,2));

// Vimos por el uso de DOM que devuelve los 3 <p> (Tag) que había en el HTML
const parrafos = document.getElementsByTagName("p");
console.log("Párrafo 0: ", parrafos);

const parrafo2 = document.getElementById("parrafo2");
console.log("Párrafo 2: ", parrafo2.textContent);

parrafo2.textContent = "Jajajajajajajaja modificado desde Javascript";