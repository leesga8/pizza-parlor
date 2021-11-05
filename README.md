# _Pizza Parlor_

#### By _**Albert Lee**_

#### Customize your toppings and make a pizza!

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQUERY_
* _Git_

## Description

_This website for a pizza company allows users to choose one or more individual toppings and a size to order a pizza and see the final cost_

## [GitHub Pages](https://leesga8.github.io/pizza-parlor)

## Specs
User will select a size of pizza S, M, L and that will be the base price. 
User will select one or more individual toppings, add each to the base price
Final cost will be shown upon submit. 

We will need a Pizza object with two properties, toppings and size. 
  Toppings will be an array of toppings. 
We need a prototype method for the cost of a pizza depending on the toppings selected. 

Objects
Pizza(toppings, size)
  this.toppings = toppings;
  this.size = size;

Prototypes
Pizza.prototype.addPrice() = function() {
  for each topping selected, add price
}


## Tests

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }





## Setup/Installation Requirements

* Navigate to the project directory on your computer.
* Type **git init** in the terminal to initialize a git repository. 
* Type **git clone https://github.com/leesga/pizza-parlor to clone the repository.
* Open index.html in your browser
* Open files in VS Code to edit


## Known Bugs

* No known issues

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Albert Lee