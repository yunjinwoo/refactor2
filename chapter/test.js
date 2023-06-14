//import { fn } from "./statement";
//오류인데 잡기 빡세네....
const fn = require("./statement")

const invoices = require("./invoices.json");
const plays = require("./plays.json");
console.log("test invoices", invoices);
console.log("test plays", plays);
console.log("========================");
invoices.forEach((invoice) => {
  console.log(fn.statement(invoice, plays));
});

/* test("1 is 1", () => {
  

  //console.log(fn)
    expect(1).toBe(1);
  }); */
