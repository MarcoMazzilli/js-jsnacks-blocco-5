// FUNZIONI


const getRandomNumbers = (min,max) => Math.random()* (max - min + 1) + min;



// GLOBAL

const listaBici = [
    {
        nome : 'Graziella',
        peso : parseFloat(getRandomNumbers(1,10).toFixed(2))
    } ,
    {
        nome : 'Mountain Bike',
        peso : parseFloat(getRandomNumbers(1,10).toFixed(2))
    } ,
    {
        nome : 'City Bike',
        peso : parseFloat(getRandomNumbers(1,10).toFixed(2))
    } ,
    {
        nome : 'Gravel',
        peso : parseFloat(getRandomNumbers(1,10).toFixed(2))
    } ,
    {
        nome : 'Downhill',
        peso : parseFloat(getRandomNumbers(1,10).toFixed(2))
    } ,
    {
        nome : 'Bmx',
        peso : parseFloat(getRandomNumbers(1,10).toFixed(2))
    } ,
    {
        nome : 'Cross',
        peso : parseFloat(getRandomNumbers(1,10).toFixed(2))
    } ,
]

//Estraggo solo la bici più leggera
console.log(listaBici);

const lightestBike = listaBici.reduce(function(a, b) {
    if (a.peso < b.peso) {
        return a
    }
    return b
})
console.log(lightestBike)

//Stampo un messaggio in console

const {nome,peso} = lightestBike

console.log(`la bici più leggera è la ${nome} con i suoi ${peso} kg.`);








