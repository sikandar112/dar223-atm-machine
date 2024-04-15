#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 30000;

let myPin = 2234;

let pinAnswer = await inquirer.prompt([
  {
    name: "sik1",
    type: "number",
    message: "enter your pin",
  },
]);
if (pinAnswer.sik1 === myPin) {
  console.log("correct pin code!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "please select option",
      choices: ["withdraw", "check balance"],
    },
  ]);
  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "enter your amount",
      },
    ]);
    myBalance -= amountAns.amount;
    console.log("your remaining balance is:" + myBalance);
  } else if (operationAns.operation === "check balance") {
    console.log("you balance is:" + myBalance);
  }
} else {
  console.log("incorrect pin number");
}
