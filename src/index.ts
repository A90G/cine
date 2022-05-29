/*Diseñar un algoritmo que recorra las
butacas de una sala de cine y determine
cuántas butacas desocupadas hay
• Suponga que para modelar este
problema, se utiliza un arreglo con
valores lógicos
• La presencia de un valor verdadero (true) en
el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el
arreglo indica que la butaca está desocupada*/
let dimensionButaca: number = Number(prompt("ingrese el nùmero de butacas"));
let butaca: boolean[] = new Array(dimensionButaca);

let resultadoTrue: number = 0;
let resultadoFalse: number = 0;
let indice: number = 0;

for (indice = 0; indice < butaca.length; indice++) {
  if (Math.random() < 0.3) {
    resultadoTrue++;
    console.log("Butaca ocupada");
  } else {
    resultadoFalse++;
    console.log("Butaca libre");
  }
}
console.log(`Hay ${resultadoTrue} butacas ocupadas`);

console.log(`Hay ${resultadoFalse} butacas libres`);
