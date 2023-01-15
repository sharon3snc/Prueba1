/*Calcular la media de notas de un estudiante usando do while
*/

let suma = 0, n=0, media=0;
let nota;

do{
    nota = parseInt(prompt("Ingrese nota: "));
    suma = suma + nota;  
    n++;

} while ((nota >= 0) && (nota <= 10));


if (n>0) {
    media= suma/n;
    console.log("La media del estudiante es " + media);
}

