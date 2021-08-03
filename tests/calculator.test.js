const Calculator = require("../code/calculator");

// Calculator.add()
test("Can add numbers", () => { expect(Calculator.add(1,5)).toBe(6) });
test("Can add big numbers", () => { expect(Calculator.add(1005013,240000)).toBe(1245013) });
test("Can add fractions", () => {expect(Calculator.add(0.1,0.1)).toBeCloseTo(0.2)} );
test("Doesn't fail when a non-number is inputed", () => { expect(Calculator.add("a7a", undefined)).toBe("That's not a number") });

// Calculator.subtract()
test("Can subtract numbers", () => { expect(Calculator.subtract(5,1)).toBe(4) });
test("Can subtract from 0", () => { expect(Calculator.subtract(0,1)).toBe(-1) });
test("Doesn't fail when a non-number is inputed", () => { expect(Calculator.subtract(5, undefined)).toBe("That's not a number") });

// Calculator.divide()
test("Can divide numbers", () => { expect(Calculator.divide(4,2)).toBe(2) });
test("Can divide by fractions", () => { expect(Calculator.divide(1,0.5)).toBe(2) });
test("Doesn't fail when divided by 0", () => { expect(Calculator.divide(1,0)).toBe("That's not possible, mate") });

// Calcualtor.multiply
test("Can multiply numbers", () => { expect(Calculator.multiply(4,2)).toBe(8) });
test("Can multiply by 0", () => { expect(Calculator.multiply(4,0)).toBe(0) });
