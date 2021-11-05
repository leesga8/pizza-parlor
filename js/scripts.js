//BUSINESS LOGIC

//BL for Order
function Order(){
  this.pizzas = {};
  this.id = 0;
}


Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

Order.prototype.assignId = function() {
  this.id += 1;
  return this.id;
};


// BL for Pizzas
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.pizzaPrice = function() {
  sizePrice = 0;
  switch(this.size) {
    case 'small':
    sizePrice += 5;
    break;
    case'medium':
    sizePrice += 10;
    break;
    case 'large':
    sizePrice += 15;
    break;
  }
  topPrice = 0;
  topPrice += (this.toppings.length)*2

  return sizePrice + topPrice;
}

//USER INTERFACE LOGIC
$(document).ready(function(){
  $('#formOne').submit(function(event){
    event.preventDefault();
    const size = $('#size').val();

    let myPizza = new Pizza();
    myPizza.size = size;

    myPizza.toppings = []
    $.each($("input[name='topping']:checked"), function(){
        myPizza.toppings.push($(this).val());
    });
    const total = myPizza.pizzaPrice()
    $("#order").text("Order: $" + total + " Size: " + myPizza.size + " Toppings: " + myPizza.toppings.join(", "));

  })
})