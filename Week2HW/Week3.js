let pizzaToppings = [
  "pepperoni",
  "cheese",
  "sausage",
  "bacon",
  "chicken",
  "onions",
  "green peppers",
  "mushrooms",
  "spinach"
];

function greetCustomer() {
  let greeting = `Welcome to Mamacita's Pizzeria, where we have a whole lot of pizza, our toppings are: `;
  for (let topping of pizzaToppings) {
    greeting += `${topping}, `;
  }

  console.log(greeting);
}

greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with:`;
  for (let topping of toppings) {
    order += `${topping}`;
  }
  console.log(`${order}. Coming up!`);

  return [size, crust, toppings];
}

function preparePizza([size, crust, toppings]) {
  console.log("... cooking pizza...");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

function servePizza(pizza) {
  let yourPizza = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    yourPizza += `${topping}, `;
  }
  yourPizza += "Enjoy!";
  console.log(yourPizza);
  return pizza;
}

servePizza(
  preparePizza(
    getPizzaOrder("large", "thick", "cheese", "onions", "green peppers")
  )
);
