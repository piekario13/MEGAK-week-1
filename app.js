// ZADANIE 1

// const name = prompt("Jak masz na imię");
// const surname = prompt("Podaj nazwisko");
// const age = prompt("Ile masz lat?");

// if (age >= 18) {
//   const fullName = (name + ' ' + surname);
//   console.log(fullName);
//   alert(fullName);
// } else {
//   console.log("Jesteś za młody");
//   alert("Jesteś za młody");
// }

// ZADANIE 2

// const a = prompt('Podaj pierwszą liczbę');
// const b = prompt('Podaj drugą liczbę');
// const operator = prompt('Jakie działanie chcesz wykonać? (+, -, /, *)');


// if (operator === "+" ) {
//   console.log(Number(a) + Number(b));
// } else if (operator === "-" ) {
//   console.log(Number(a) - Number(b));
// } else if (operator === "*" ) {
//   console.log(Number(a) * Number(b));
// } else if (operator === "/" ) {
//   console.log(Number(a) / Number(b))
// } else console.log("Brak danych");

// ZADANIE 3

// const start = 1;
// const count = 100;

// for (let i = start; i <= count; i++) {
//   if (i % 3 === 0 )
//   console.log(i + " liczba podzielna przez trzy")
// }

// ZADANIE 4
const words = prompt('Wpisz jakiś tekst');
for (let i = 0; i < words.length; i++) {
  if (i % 2 === 0 ) {
    console.log(words[i].toUpperCase())
  } else {
    console.log(words[i])
  }
}