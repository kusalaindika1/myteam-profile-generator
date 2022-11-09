const Employee = require("../libs/Employee.js");

const newEmp = new Employee("Amila", "34553", "amila@gmail.com");

test("Employee Test with sample Data == name Test", () => {
  expect(newEmp.getInfor().name).toBe("Amila");
});

test("Employee Test with sample Data == id Test", () => {
  expect(newEmp.getInfor().id).toBe("34553");
});

test("Employee Test with sample Data == email Test", () => {
  expect(newEmp.getInfor().email).toBe("amila@gmail.com");
});
