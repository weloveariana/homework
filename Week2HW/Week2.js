// Created two variables for my Pizza Place the name of the Pizza Place: Mamacita's Pizzeria and numOfToppings is 16.
// I decided to use const for my variables because there is no need for them to change.

let pizzaPlace = "Mamacita's Pizzeria";
let numOfToppings = 16;

// Created and set values for all variable toppings.
// Is there a way that I can split my toppings into different categories? Like Protein and Other?

console.log(pizzaPlace);
console.log(numOfToppings);

console.log(typeof pizzaPlace);
console.log(typeof numOfToppings);

// Print a template literal that uses both variables to construct a short sentence about your Pizza Place.

//NODEconsole.log(`At ${pizzaPlace}, we have ${numOfToppings} toppings.`);

// Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.

/*if (numOfToppings <= 10) {
  console.log("Quality, not quantity.");
} else if (numOfToppings >= 10) {
  console.log("A whole lot of pizza.");
}

// *BONUS* Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)

/*nodenodefunction evenNumToppings() {
  for (let i = 0; i <= 16; i += 2) {
    console.log(i);
  }
}

evenNumToppings();
