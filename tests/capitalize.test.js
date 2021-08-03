const capitalize = require("../code/capitalize");

test("Didn't capitalize", () => { expect(capitalize("gamed nek")).toBe("Gamed nek") });
test("Error with capitalizing an upper case", () => { expect(capitalize("A7a f45")).toBe("A7a f45") });
test("Error with starting with number", () => { expect(capitalize("3a4")).toBe("3a4") });
test("Error with string not being string", () => { expect(capitalize(true)).toBe("That's not a string") });
test("Error with string not being string", () => { expect(capitalize(35)).toBe("That's not a string") });
test("Error with string not being string", () => { expect(capitalize(undefined)).toBe("That's not a string") });
