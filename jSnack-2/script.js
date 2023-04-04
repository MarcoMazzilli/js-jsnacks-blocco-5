const STUDENTS = [
  {
    firstName : "Mario",
    lastName : "Rossi",
    matricola : getRandomNumbers(1000,5000),
    voti : votiRandom()
  },
  {
    firstName : "Giuseppe",
    lastName : "Verdi",
    matricola : getRandomNumbers(1000,5000),
    voti : votiRandom()
  },
  {
    firstName : "Alberto",
    lastName : "Solenne",
    matricola : getRandomNumbers(1000,5000),
    voti : votiRandom()
  },
  {
    firstName : "Angelo",
    lastName : "Andorra",
    matricola : getRandomNumbers(1000,5000),
    voti : votiRandom()
  },
  {
    firstName : "Umberto",
    lastName : "Zavorra",
    matricola : getRandomNumbers(1000,5000),
    voti : votiRandom()
  },
  {
    firstName : "Serena",
    lastName : "Dellavia",
    matricola : getRandomNumbers(1000,5000),
    voti : votiRandom()
  }
]

const NEWSTUDENTS = [];

const container = document.querySelector(".container-card")

/* **********************************************
                      EVENTI
*************************************************/

for ( let i = 0; i < STUDENTS.length ; i++){
  const student = STUDENTS[i];
  console.log('Singolo studente -->',student);

   const mediaVoti = calculateMedia(student) //Ottengo la media con una funzione
   console.log(mediaVoti) // MEdia dei voti
  
    const newStudentData = {
      completeName : `${student.firstName} ${student.lastName}`,
      matricola : ` ${student.matricola}`,
      mediaDeiVoti : `${mediaVoti}`,
      percorsofoto : `img/avatar${i}.jpg`
    }
    NEWSTUDENTS.push(newStudentData)

    const cardStudent =  `
    <div class="card">

      <div class="image">
        <img src="img/avatar${i}.jpg" alt="">
      </div>

      <div class="description">
        <h3>nome: ${newStudentData.completeName}</h3>
        <p class="matricola"><strong>Matricola:${newStudentData.matricola}</strong></p>
        <p>Media dei voti: ${mediaVoti}</p>
      </div>

    </div>
    `;
    
    console.log(newStudentData.percorsofoto)
    container.innerHTML += cardStudent;
}

console.log(NEWSTUDENTS)



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
  mediaVoti = (sommaVoti / studente.voti.length).toFixed(1);

  // console.log("media dei voti",mediaVoti);
  return mediaVoti
}


function getRandomNumbers(max,min){
  return numbers = Math.floor(Math.random()* (max - min + 1)) + min;
}



 function votiRandom(){

   const votiStudente = [];
   for (let i = 0; i < getRandomNumbers(1,7); i++) {
     const voto = getRandomNumbers(1,10)
     votiStudente.push(voto)
     
    }
    console.log('abdulllla',votiStudente)
    return votiStudente;
  }


