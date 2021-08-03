const reverseString = require("../code/reverseString");

test("Can reverse", () => { expect(reverseString("Ass")).toBe("ssA") });
test("Can reverse strings with spaces", () => { expect(reverseString("The Blacker The Berry")).toBe("yrreB ehT rekcalB ehT") });
test("Can reverse strings with numbers and special chars", () => { expect(reverseString("03' Adolescence")).toBe("ecnecselodA '30") });
test("Can reverse numbers", () => { expect(reverseString("2005")).toBe("5002") });
test("Doesn't fail if string != string", () => { expect(reverseString(true)).toBe("That's not a string") });
test("Doesn't fail if string != string", () => { expect(reverseString(null)).toBe("That's not a string") });
test("Doesn't fail if string != string", () => { expect(reverseString(undefined)).toBe("That's not a string") });
