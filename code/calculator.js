const Calculator =
{
	add: (x, y) =>
	{
		if (typeof(x) !== "number" || typeof(y) !== "number")
			return "That's not a number";
		return x + y;
	},

	subtract: (x, y) =>
	{
		if (typeof(x) !== "number" || typeof(y) !== "number")
			return "That's not a number";
		return x - y
	},

	divide: (x,y) =>
	{
		if (typeof(x) !== "number" || typeof(y) !== "number")
			return "That's not a number";
		if (y === 0) return "That's not possible, mate";
		return x / y;
	},

	multiply: (x,y) =>
	{
		if (typeof(x) !== "number" || typeof(y) !== "number")
			return "That's not a number";
		return x * y;
	}
}

module.exports = Calculator;
