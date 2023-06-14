
const invoices = require("./invoices.json")
const plays = require("./plays.json")
const statement = require("./statement")

console.log(statement)

console.log("test invoices", invoices);
console.log("test plays", plays);
console.log("========================");
invoices.forEach((invoice) => {
  console.log(statement.statement(invoice, plays));
});