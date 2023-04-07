console.log("hello world");
const getRandomNumbers = (min,max) =>Math.floor(Math.random()* (max - min + 1) + min) 

const campionato = [
    {
        squadra: "Milan",
        puntiFatti : 0,
        falliSubiti: 0,
        logo : 'milanLogo.png'
    },
    {
        squadra: "Inter",
        puntiFatti : 0,
        falliSubiti: 0,
        logo : 'interLogo.png'
    },
    {
        squadra: "Napoli",
        puntiFatti : 0,
        falliSubiti: 0,
        logo : 'napoliLogo.png'
    },
    {
        squadra: "Juventus",
        puntiFatti : 0,
        falliSubiti: 0,
        logo : 'juventusLogo.png'
    },
    {
        squadra: "Roma",
        puntiFatti : 0,
        falliSubiti: 0,
        logo : 'romaLogo.png'
    },
    {
        squadra: "Sassuolo",
        puntiFatti : 0,
        falliSubiti: 0,
        logo : 'sassuoloLogo.png'
    },
    {
        squadra: "Torino",
        puntiFatti : 0,
        falliSubiti: 0,
        logo : 'torinoLogo.png'
    },
    {
        squadra: "Lazio",
        puntiFatti : 0,
        falliSubiti: 0,
        logo : 'lazioLogo.png'
    },
    {
        squadra: "Fiorentina",
        puntiFatti : 0,
        falliSubiti: 0,
        logo : 'fiorentinaLogo.png'
    },
    {
        squadra: "Bologna",
        puntiFatti : 0,
        falliSubiti: 0,
        logo : 'bolognaLogo.png'
    },
]

const ul = document.querySelector("ul");

/// EVENTS
campionato.forEach(squadra => {
    squadra.puntiFatti = getRandomNumbers(0,80);
    squadra.falliSubiti = getRandomNumbers(0,30);
});
console.log(campionato)

const classificaFalli = campionato.map((obj)=> {
    const {squadra,falliSubiti,logo} = obj
    obj = 
    {
        squadra,
        falliSubiti,
        logo,
    }
    return obj
})

classificaFalli.sort((a,b)=>b.falliSubiti-a.falliSubiti);
console.log(classificaFalli);

for (const obj of classificaFalli) {
    const {squadra,falliSubiti,logo} = obj
    const li = document.createElement("li")
    li.className ="list-group-item border border-black border-bottom-0 border-top-0"
    li.innerHTML = `
    <div class="row">
        <div class="col-auto px-5"><img src="img/${logo}" alt=""></div>
        <div class="col-7 d-flex align-items-center "><span class="fw-bolder text-uppercase fs-3">${squadra}</span></div>
        <div class="col-2 d-flex align-items-center"><span class="fw-bolder text-uppercase fs-5">${falliSubiti}</span></div>
    </div>
    `
    ul.appendChild(li)
}