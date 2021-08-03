const caeser = require("../code/caeserCipher");

test("Works with normal words", () => expect(caeser("ass")).toBe("btt"));
test("Works with sentences with spaces", () => expect(caeser("defend the east wall of the castle")).toBe("efgfoe uif fbtu xbmm pg uif dbtumf"));
test("Works with uppercase and lowercase", () => expect(caeser("Ass")).toBe("Btt"));
test("Works with punctuation", () => expect(caeser("Ass, boobs and dick, baby")).toBe("Btt, cppct boe ejdl, cbcz"));
test("Works with z|Z", () => expect(caeser("ZZZZzzzz")).toBe("AAAAaaaa"));
