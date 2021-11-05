function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.sizePrice = function() {
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
  return sizePrice;
}