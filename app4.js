/*Calcular la media de notas de un estudiante usando for
*/

let suma = 0, n, media=0;
let nota;

n= parseInt(prompt("Ingrese cuantas notas tiene el estudiante: "));

if (n>0){
    for(let i=0; i<n; i++){
        nota = parseInt(prompt("Ingrese nota: "));
        if((nota>=0) && (nota<=10))
            suma = suma + nota;
    }
    media= suma/n;

    console.log("La media del estudiante es " + media);

}

