// Exercise 1: Simple If/Else Statement

let a = 5;
let b = 2;

if (a > b ) {
    console.log(`La valeur de ${a} est superieur à ${b}`);
} else {
    console.log(`La valeur de ${b} est superieur à ${a}`);
}

// Exercice 2 : Chihuahua

let newDog = "Chihuahua";

console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog == "Chihuahua") {
    console.log("J'adore les chihuahuas, c'est ma race de chien préférée");
} else {
    console.log("Je m'en fous, je préfère les chats");
}

// Exercice 3 : Pair Ou Impair

let userNumber = parseInt(prompt("Entrer votre nombre"))
if (userNumber % 2 == 0){
    alert(`${userNumber} est un nombre pair`);
} else {
    alert(`${userNumber} est un nombre impair`);
}

// Exercice 4 : Discussion De Groupe

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length == 0) {
    console.log("Personne n'est en ligne");
} else if (users.length == 1) {
    console.log(`${users[0]} est en ligne`);
} else if (users.length == 2){
    console.log(`${users[0]} et ${users[1]} sont en ligne`);
} else if (users.length > 2){
    console.log(`${users[0]}, ${users[1]} et ${users.length-2} sont en ligne`);
}