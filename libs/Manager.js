const Employee = require("./Employee");

class Manager extends Employee {
  officeNum;

  constructor(name, id, email, offNum) {
    super(name, id, email);
    this.officeNum = offNum;
  }

  getInfor() {
    return { ...super.getInfor(), officeNum: this.officeNum, role: "Manager" };
  }
}

module.exports = Manager;
