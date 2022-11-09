const Employee = require("./Employee.js");

class Engineer extends Employee {
  gitHub;

  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }

  getInfor() {
    return { ...super.getInfor(), gitHub: this.gitHub, role: "Engineer" };
  }
}

module.exports = Engineer;
