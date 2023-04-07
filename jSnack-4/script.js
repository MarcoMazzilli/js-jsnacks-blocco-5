const classe = [
    {
     id: 213,
     fullName:'Marco Della Rovere',
     totGrades: 78,
    },
    {
     id: 110,
     fullName:'Paola Cortellessa',
     totGrades: 96,
    },
    {
     id: 250,
     fullName:'Andrea Mantegna',
     totGrades: 48,
    },
    {
     id: 145,
     fullName:'Gaia Borromini',
     totGrades: 74,
    },
    {
     id: 196,
     fullName:'Luigi Grimandello',
     totGrades: 68,
    },
    {
     id: 102,
     fullName:'Piero della Francesca',
     totGrades: 50,
    },
    {
     id: 120,
     fullName:'Francesca da Polenta',
     totGrades: 84,
    },
]

//Rimappo l'array cambiando la formattazione dei nomi
const listName = classe.map(studente => studente.fullName.toUpperCase())
console.log(listName);

// //Filtro l'array originale e salvo solo gli studenti con un tot. voti maggiore di 70
// const bestGrades = classe.filter(studente => studente.totGrades > 70)
// console.log(bestGrades);

// //Seleziono solo gli id superiori a 120
// const higherId = bestGrades.filter(studente => studente.id > 120)
// console.log(higherId);


const bestGrades = [];
const bestGradesHigherId = [];


classe.forEach(studente => {
    if (studente.totGrades > 70 && studente.id > 120) {
        bestGradesHigherId.push(studente)
    }
    if (studente.totGrades >70) {
        bestGrades.push(studente)
    }
});
console.log(bestGrades);
console.log(bestGradesHigherId);


const ul = document.querySelector("ul");

for(studente of listName){
    const li = document.createElement("li");
    li.innerHTML = studente;
    ul.appendChild(li);
}