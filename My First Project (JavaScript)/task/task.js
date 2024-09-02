const input = require('sync-input');
const console = require("node:console");

// We have imported the 'sync-input' package for you.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
// You will need it in later stages.
const food_item_earnings = [202, 118, 2250, 1680, 1075, 80];
console.log("Earned Amount:");
console.log("Bubblegum: $" + food_item_earnings[0]);
console.log("Toffee: $" + food_item_earnings[1]);
console.log("Ice cream: $" + food_item_earnings[2]);
console.log("Milk chocolate: $" + food_item_earnings[3]);
console.log("Doughnut: $" + food_item_earnings[4]);
console.log("Pancake: $" + food_item_earnings[5]);
console.log();
//Sum of food_items_earnings
let totalEarnings = 0;
for (const foodItemEarningsKey in food_item_earnings) {
    totalEarnings += food_item_earnings[foodItemEarningsKey];
}
console.log("Income: $" + totalEarnings);

//Get the staff expenses from user input
const staffExp = input("Staff expenses:");
const otherExp = input("Other expenses:");
const netIncome = food_item_earnings.reduce((total, earnings) => total + earnings, 0) - staffExp - otherExp;
console.log("Net income: $" + netIncome);


