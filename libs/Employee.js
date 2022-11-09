class Employee {
  name;
  id;
  email;

  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getInfor() {
    return {
      name: this.name,
      id: this.id,
      email: this.email,
    };
  }
}

module.exports = Employee;
