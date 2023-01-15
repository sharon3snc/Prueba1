const estudiante={
    nombre:"Marc",
    apellido:"Zuckerberg",
    matricula:"A223344",
    asignaturas: ["matematicas", "programacion", "ciencias", "empresa"],
    notas: [7.5,10,4,10],
    
    media: function() {
        let suma=0;
        for (let i=0; i< this.notas.length; i++) {
            suma += this.notas[i];
        }
        return (suma/this.notas.length);
    },

    aprobadas: function() {
        let a=0;
        for (let i=0; i<this.notas.length; i++){
            if (this.notas[i]>=5){
                a++;
            }
        }
        return a;
    },

    suspensas: function() {
        let s=0;
        s= this.notas.length - this.aprobadas();
        return s;
    }
};

console.log (estudiante);
console.log (estudiante.media());
console.log (estudiante.aprobadas());
console.log(estudiante.suspensas());

