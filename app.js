const Manager = require("./libs/Manager");
const Engineer = require("./libs/Engineer");
const Intern = require("./libs/Intern");
const inquirer = require("inquirer");
const htmlGen = require("./htmlGen.js");
const path = require("path");
const fs = require("fs");

const employee = [];

const qus = [
  {
    type: "input",
    name: "name",
    message: "Enter Employee Name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter Employee ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter Employee Email:",
  },
  {
    type: "list",
    name: "role",
    message: "Employee Role:",
    choices: ["Intern", "Engineer", "Manager"],
  },
];

const appRun = async () => {
  while (true) {
    const data = await inquirer.prompt(qus);

    if (data.role === "Manager") {
      const managerData = await inquirer.prompt({
        type: "input",
        name: "offNum",
        message: "Enter Manager Office Number:",
      });

      const mg = new Manager(
        data.name,
        data.id,
        data.email,
        managerData.offNum
      );

      employee.push(mg.getInfor());
    } else if (data.role === "Engineer") {
      const engineerData = await inquirer.prompt({
        type: "input",
        name: "gitHub",
        message: "Enter Engineer GitHub Account:",
      });

      const eg = new Engineer(
        data.name,
        data.id,
        data.email,
        engineerData.gitHub
      );

      employee.push(eg.getInfor());
    } else if (data.role === "Intern") {
      const internData = await inquirer.prompt({
        type: "input",
        name: "scl",
        message: "Enter Intern School:",
      });

      const intern = new Intern(data.name, data.id, data.email, internData.scl);

      employee.push(intern.getInfor());
    }

    const conf = await inquirer.prompt({
      type: "confirm",
      name: "conf",
      message: "Have More Employees?",
    });
    if (!conf.conf) {
      break;
    }
  }

  try {
    fs.writeFileSync(
      path.join(__dirname, "dist", "index.html"),
      htmlGen(employee)
    );
    console.log("file written successfully");
  } catch (err) {
    console.error(err);
  }
};

appRun();
