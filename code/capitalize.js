const capitalize = string =>
{
	if (typeof(string) !== "string") return "That's not a string";
	else return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;
