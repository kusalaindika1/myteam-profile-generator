const Engineer = require("../libs/Engineer.js");

const newEng = new Engineer("Amila", "34455", "amila@gmila.com", "amiladev");

test("Engineer Test with sample Data == name Test", () => {
  expect(newEng.getInfor().name).toBe("Amila");
});

test("Engineer Test with sample Data == id Test", () => {
  expect(newEng.getInfor().id).toBe("34455");
});

test("Engineer Test with sample Data == email Test", () => {
  expect(newEng.getInfor().email).toBe("amila@gmila.com");
});

test("Engineer Test with sample Data == gitHub Test", () => {
  expect(newEng.getInfor().gitHub).toBe("amiladev");
});
