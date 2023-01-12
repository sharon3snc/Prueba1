/*Programa que guarda los datos de un estudiante y calcula su media de notas.
Ademas nos dice si tiene un: suspenso, aprobado, notable o sobresaliente
Suspenso <5, aprobado 5<= x<7, notable 7>x>9, sobresaliente >=9
*/


let nombre, apellidos, DNI, nota1, nota2, nota3, nota4, promedio_notas;
let color= "rojo";

nombre= "Emma";
apellidos= "García";
DNI= "444888000";
nota1= 10;
nota2= 8.5;
nota3= 5.5;
nota4= 9;

console.log(typeof(nota1)); /* typeof me devuelve el tipo de dato de una variable*/

// Calcular promedio de notas
//promedio_notas= nota1 + nota2 + nota3 + nota4;
//promedio_notas= promedio_notas/4;

promedio_notas= (nota1+nota2+nota3+nota4)/4;

console.log("El promedio de notas del estudiante " + nombre + " " + apellidos + " es: " + promedio_notas);
console.log (promedio_notas<5);
console.log (promedio_notas>=5 && promedio_notas<7);
console.log (promedio_notas>=7 && promedio_notas<9);
console.log (promedio_notas>=9 && promedio_notas<=10);

if (promedio_notas<5)
console.log(nombre + " tiene un SUSPENSO");

if (promedio_notas>=5 && promedio_notas<7)
console.log(nombre + " tiene un APROBADO");

if (promedio_notas>=7 && promedio_notas<9)
console.log(nombre + " tiene un NOTABLE");

if (promedio_notas>=9 && promedio_notas<=10)
console.log(nombre + " tiene un SOBRESALIENTE");

//igualdad e igualdad estricta
let edad=29;

if (edad=="29")
console.log("son iguales en valor" + " " + typeof(edad) + " " + typeof("29"));

if (edad===29)
console.log("son iguales en valor y tipo");


//Area de un circulo
const PI=3.1416;
let r= 3.0;
let area= PI* (r**2);
console.log("el area del circulo es = " + area);


