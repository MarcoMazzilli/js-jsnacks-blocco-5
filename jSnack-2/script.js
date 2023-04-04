const STUDENTS = [
  {
    firstName : "Mario",
    lastName : "Rossi",
    matricola : getRandomNumbers(1000,5000),
    voti : [1,2,3,4,5]
  },
  {
    firstName : "Giuseppe",
    lastName : "Verdi",
    matricola : getRandomNumbers(1000,5000),
    voti : [6,7,8,9,10]
  },
  {
    firstName : "Alberto",
    lastName : "Solenne",
    matricola : getRandomNumbers(1000,5000),
    voti : [10,9,8,7,6]
  },
  {
    firstName : "Angelo",
    lastName : "Andorra",
    matricola : getRandomNumbers(1000,5000),
    voti : [5,4,3,2,1]
  },
  {
    firstName : "Umberto",
    lastName : "Zavorra",
    matricola : getRandomNumbers(1000,5000),
    voti : [12,5,7,8,3]
  },
  {
    firstName : "Serena",
    lastName : "Dellavia",
    matricola : getRandomNumbers(1000,5000),
    voti : [5,5,5,5,5]
  }
]

for ( let object in STUDENTS){

  const student = STUDENTS[object];
  console.log('tutti i voti dello studente -->',student); //Tutti i voti di ogni singolo studente

   const mediaVoti = calculateMedia(student) //Ottengo la media con una funzione
   console.log(mediaVoti) // MEdia dei voti
  
}



/* **********************************************
                      FUNZIONI
*************************************************/

function calculateMedia(studente){
  
  let sommaVoti = 0; // Scopro la somma dei voti

  const mediaStudente = studente.voti.forEach((voti) => {
    const votoSingolo = voti;
    
    //console.log('singolo voto -->',votoSingolo);
    
    sommaVoti += votoSingolo;
  }) ;
  //Per scoprire la media prendo la somma dei voti e la divido per il N. di voti 
  mediaVoti = sommaVoti / studente.voti.length;

  // console.log("media dei voti",mediaVoti);
  return mediaVoti
}


function getRandomNumbers(max,min){
  return numbers = Math.floor(Math.random()* (max - min + 1)) + min;
}

