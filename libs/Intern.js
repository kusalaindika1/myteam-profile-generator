const Employee = require("./Employee");

class Intern extends Employee {
  school;

  constructor(name, id, email, scl) {
    super(name, id, email);
    this.school = scl;
  }

  getInfor() {
    return { ...super.getInfor(), school: this.school, role: "Intern" };
  }
}

module.exports = Intern;
