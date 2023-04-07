const users = [
  {
    firstName : "Mario",
    lastName : "Rossi",
    age : 22
  },
  {
    firstName : "Giuseppe",
    lastName : "Verdi",
    age : 66
  },
  {
    firstName : "Luigi",
    lastName : "De Girolamo",
    age : 54
  },
  {
    firstName : "Ugo",
    lastName : "De Ughi",
    age : 15
  },
  {
    firstName : "Alberto",
    lastName : "Solenne",
    age : 90
  },
  {
    firstName : "Umbertino",
    lastName : "Bianchi",
    age : 10
  },
]

const utentiMinorenni = users.filter( (user) => user.age < 18 )
console.log(utentiMinorenni)

const utentiMaggiorenne = users.filter( (user) => user.age >= 18 && user.age <= 65 )
console.log(utentiMaggiorenne)

const utentiOver = users.filter(user => user.age > 65 )
console.log(utentiOver)

