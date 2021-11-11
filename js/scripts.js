//BUSINESS LOGIC

//BL for Order
function Order() {
  this.pizzas = {};
  this.id = 0;
}


Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

Order.prototype.assignId = function () {
  this.id += 1;
  return this.id;
};


Order.prototype.findPizza = function (id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
};

Order.prototype.deletePizza = function (id) {
  if (this.pizzas[id] === undefined) {
    return false;
  }
  delete this.pizzas[id];
  return true;
};

// BL for Pizzas
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function () {
  sizePrice = 0;
  switch (this.size) {
    case 'Small':
      sizePrice += 5;
      break;
    case 'Medium':
      sizePrice += 10;
      break;
    case 'Large':
      sizePrice += 15;
      break;
  }
  topPrice = 0;
  topPrice += (this.toppings.length) * 2

  return sizePrice + topPrice;
}

//USER INTERFACE LOGIC


let order = new Order();

function displayPizzaDetails(orderToDisplay) {
  let pizzasList = $("ul#pizzas");
  let htmlForInfo = "";
  Object.keys(orderToDisplay.pizzas).forEach(function (key) {
    const pizza = orderToDisplay.findPizza(key);
    htmlForInfo += "<li id=" + pizza.id + ">" + "SIZE: " + pizza.size + "<br>" + "TOPPINGS: " + pizza.toppings.join(", ") + "<br>" + "PRICE: " + pizza.pizzaPrice() + "</li>";
  });
  pizzasList.html(htmlForInfo);
}

function showPizza(pizzaId) {
  const pizza = order.findPizza(pizzaId);
  $("#show-contact").show();
  $(".botsize").html(pizza.size);
  $(".toppings").html(pizza.toppings);
  $(".price").html(pizza.pizzaPrice());
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + + pizza.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#pizzas").on("click", "li", function () {
    showPizza(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function () {
    order.deletePizza(this.id);
    $("#show-contact").hide();
    displayPizzaDetails(order);
  });
}

$(document).ready(function () {
  attachContactListeners();
  $("form#formOne").submit(function (event) {
    event.preventDefault();
    let array = []
    const toppings = $.each($("input[name='topping']:checked"), function () {
      array.push($(this).val());
    });
    
    const size = $("#sizeorder").val();
    
    let myPizza = new Pizza(size, array);
    order.addPizza(myPizza);
    displayPizzaDetails(order);
  });
});