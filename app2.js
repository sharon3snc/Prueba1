/*Calcular la media de notas de un estudiante usando bucles
*/

let suma = 0, n=0, media=0;

let nota = parseInt(prompt("Ingrese nota: ")); //parseInt convierte string a entero (Int)

while ((nota >= 0) && (nota <= 10)){
    suma = suma + nota;   //es lo mismo que suma += nota
    n++;
    nota = parseInt(prompt("Ingrese nota: "));
}

if (n>0) {
    media= suma/n;
    console.log("La media del estudiante es " + media);
}





