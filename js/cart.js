`use strict`;

// What I wanted:- // Condition to check if countItem is less than 10 if it is then items should be not added but a popup should be shown and items should not be added if not keep incrementing

// Problem:- why my cart is keep on incrementing when my state variable has crossed the limit.

// Stroing Buttons

const showCartBtn = document.querySelector(".showCart");
const addCartBtn = document.querySelector(".addToCart");
const addBy2Btn = document.querySelector(".addBy2");
const addBy3Btn = document.querySelector(".addBy3");
const addBy4Btn = document.querySelector(".addBy4");
const addBy5Btn = document.querySelector(".addBy5");

// State variables

let countItem = 0;

// functions to add Items to the cart

const addCart = function () {
  countItem++;
  console.log(`Items in cart are: ${countItem}`);
  console.log(countItem);
};
const addBy2 = function () {
  countItem += 2;
  console.log(`Items in cart are: ${countItem}`);
  console.log(countItem);
};

const addBy3 = function () {
  countItem += 3;
  console.log(`Items in cart are: ${countItem}`);
  console.log(countItem);
};
const addBy4 = function () {
  countItem += 4;
  console.log(`Items in cart are: ${countItem}`);
  console.log(countItem);
};
const addBy5 = function () {
  countItem += 5;
  console.log(`Items in cart are: ${countItem}`);
  console.log(countItem);
};

if (countItem < 10) {
  console.log(countItem);
  // will able to click on buttons
  addCartBtn.addEventListener("click", addCart);
  addBy2Btn.addEventListener("click", addBy2);
  addBy3Btn.addEventListener("click", addBy3);
  addBy4Btn.addEventListener("click", addBy4);
  addBy5Btn.addEventListener("click", addBy5);
} else {
  alert("Your limit to add Items to cart has been crossed a limit of 10");
}

// function to show Items in cart

const showCart = function () {
  console.log(`Items in cart are: ${countItem}`);
};

// Event listener to the show cart button
showCartBtn.addEventListener("click", showCart);
