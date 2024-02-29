const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

if (isMorning){
 document.querySelector('#welcome').textContent = 'Good Morning'
}

if (isAfternoon){
    document.querySelector('#welcome').textContent = 'Good Afternoon'
   }

if (isEvening){
    document.querySelector('#welcome').textContent = 'Good Evening'
   }

//secret message
   const key = "It's a secret to everybody."
   const secret = "It's Dangerous to go Alone"

   localStorage.setItem(key, JSON.stringify(secret))
