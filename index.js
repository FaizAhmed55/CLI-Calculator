#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enterfirstnumber", type: "number", name: "firstnumber" },
    { message: "entersecondnumber", type: "number", name: "secondnumber" },
    {
        message: "chose an operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "substraction", "multiplication", "division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "substraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("plese select valid operator");
}
