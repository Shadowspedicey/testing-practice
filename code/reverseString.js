const reverseString = string =>
{
	if (string == null) return "That's not a string";
	string.toString();
	if (typeof(string) != "string") return "That's not a string";
	stringArr = string.split("");
	stringArr.reverse();
	return stringArr.join("");
}

module.exports = reverseString;
