let num1 = parseInt (prompt ("Ingrese un numero"));
let num2 = parseInt(prompt ("Ingrese otro numero"));

document.write(" Ejemplo de texto de js");

function sumar(num1, num2) {
    let suma = num1 + num2;
    return suma;
}
let resultado = sumar(num1, num2);
console.log(resultado);
console.log(sumar(num1, num2));

const imprimirfrase = nombre => `Hola ${nombre}`;
let nombre = "Geovani";
console.log(imprimirfrase(nombre));

//objetos
const carro = {
    Color: 'rojo',
    Marca: 'Toyota',
    funciones:{
        acelera: 160,
        frena: 0,

    } 
}

console.log(carro.Color);
console.log(carro);
/*const sumar = (num1, num2) => resultado = num1+num2;
let muestra=sumar(num1, num2);
document.write (muestra);*/
/*fetch ("https://pokeapi.co/api/v2/pokemon?limit")
.then (res => res.json())
.then.catch()
const persona = {
    nombres:  " ",
    id: " ",
    edad: " ",
    sexo: " ",
    redes_sociales: {
        facebook: " ",
        instagram: " ",
        twitter: " ",
    }

}*/