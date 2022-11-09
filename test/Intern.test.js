const Intern = require("../libs/Intern.js");

const newInt = new Intern("Amila", "344444", "amila@gmail.com", "Hungama");

test("Intern Test with sample Data == name Test", () => {
  expect(newInt.getInfor().name).toBe("Amila");
});

test("Intern Test with sample Data == id Test", () => {
  expect(newInt.getInfor().id).toBe("344444");
});

test("Intern Test with sample Data == email Test", () => {
  expect(newInt.getInfor().email).toBe("amila@gmail.com");
});

test("Intern Test with sample Data == school Test", () => {
  expect(newInt.getInfor().school).toBe("Hungama");
});
