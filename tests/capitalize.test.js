const capitalize = require("../code/capitalize");

test("Can capitalize", () => { expect(capitalize("gamed nek")).toBe("Gamed nek") });
test("Can capitalize even if 1st char is uppercase", () => { expect(capitalize("A7a f45")).toBe("A7a f45") });
test("Can capitalize if 1st char is a num", () => { expect(capitalize("3a4")).toBe("3a4") });
test("No error with string not being string", () => { expect(capitalize(true)).toBe("That's not a string") });
test("No error with string not being string", () => { expect(capitalize(35)).toBe("That's not a string") });
test("No error with string not being string", () => { expect(capitalize(undefined)).toBe("That's not a string") });
