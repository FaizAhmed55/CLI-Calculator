#! /usr/bin/env node

import inquirer from "inquirer";
const reply = await inquirer.prompt([
  { message: "enterfirstnumber", type: "number", name: "firstnumber" },
  { message: "entersecondnumber", type: "number", name: "secondnumber" },
  {
    message: "chose an operator",
    type: "list",
    name: "operator",
    choices: ["Addition", "substraction", "multiplication", "division"],
  },
]);

if (reply.operator === "Addition") {
    console.log(reply.firstnumber + reply.secondnumber);
  } else if (reply.operator === "substraction") {
  console.log(reply.firstnumber - reply.secondnumber);
} else if (reply.operator === "multiplication") {
  console.log(reply.firstnumber * reply.secondnumber);
} else if (reply.operator === "division") {
  console.log(reply.firstnumber / reply.secondnumber);
} else {
  console.log("plese select valid operator");
}
