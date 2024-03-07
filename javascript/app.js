const nome = prompt('Inserisci il tuo nome') //string||null
const cognome = prompt('Inserisci il tuo cognome') //string||null
const colore = prompt('Inserisci il tuo colore preferito') //string||null
let min = 1; // number
let max = 100; // number
let key= Math.floor(Math.random() * (max - min + 1)) + min; //numero random
const password = (nome + cognome + colore + key) //string
console.log(password)