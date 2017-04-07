// Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.
//
// Allow the user to choose toppings and size for the pizza they'd like to order.
// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

// If you finish meeting the objectives for this project, consider adding additional features, such as:
//
// Style your site with CSS and images.
// Allow users to order more than one pizza with different toppings.
// Display the list of pizzas ordered as links that can be clicked for details.
// Offer a delivery option that then requires address information.

var totalCost = 0;
var allItems = [];

var sizePrices = {
                   small: 10,
                   medium: 12,
                   large: 14,
                   extra_large: 16
                 }

var toppingPrices = {
                      pepperoni: 1,
                      sausage: 1,
                      chicken: 1,
                      olives: .75,
                      onions: .75,
                      bell_peppers: .75
                    }

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  // this.calcCost = function() {
  //   debugger;
  //   this.cost = 0;
  //   this.cost += sizePrices[this.size];
  //   this.toppings.forEach(function(topping) {
  //     this.cost += toppingPrices[topping];
  //   }, this)
  // }
}

Pizza.prototype.calcCost = function() {
  debugger;
  this.cost = 0;
  this.cost += sizePrices[this.size];
  this.toppings.forEach(function(topping) {
    this.cost += toppingPrices[topping];
  }, this)
}

// function Delivery(street, ) {
//   this.street
//   this.address =
// }


$(document).ready(function() {
  $("form#pizza-picker").submit(function(event) {
    event.preventDefault();

    // create pizza object with form input
    var size = $("#size").val();
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppings.push($(this).val());
      console.log(toppings)
    })
    var pizza = new Pizza(size, toppings);
    pizza.calcCost();
    console.log(pizza)

    // check if toppings = []
    if (toppings.length < 1) {
      pizza.toppings = ["no toppings"];
    }

    // push pizza object to array
    allItems.push(pizza)
    console.log(allItems)

    // append total and pizza info to cart
    totalCost += pizza.cost;
    $("#checkout h4").text("$" + totalCost);
    $("#checkout h4").after("<p> + $" + pizza.cost + " " + pizza.size + " pizza with " + pizza.toppings + "</p>")
  })
  $("#checkout").click(function() {
    $("#pizza").hide();
    $("#delivery").show();
  })
  $("#pickup-button").click(function() {
    $("#final h4").text("Your food will be ready for pickup in 20 minutes")
  })
})
