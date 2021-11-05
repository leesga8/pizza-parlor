//BUSINESS LOGIC
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

// Pizza.prototype.topPrice = function(){

// }

// Pizza.prototype.finalPrice = function(){
//   finalPrice = topPrice + sizePrice;
//   return finalPrice;
// }

//USER INTERFACE LOGIC