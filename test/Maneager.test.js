const Manager = require("../libs/Manager.js");

const newMng = new Manager("Amila", "334445", "amila@gmail.com", "1");

test("Manager Test with sample Data == name Test", () => {
  expect(newMng.getInfor().name).toBe("Amila");
});

test("Manager Test with sample Data == id Test", () => {
  expect(newMng.getInfor().id).toBe("334445");
});

test("Manager Test with sample Data == email Test", () => {
  expect(newMng.getInfor().email).toBe("amila@gmail.com");
});

test("Manager Test with sample Data == office number Test", () => {
  expect(newMng.getInfor().officeNum).toBe("1");
});
