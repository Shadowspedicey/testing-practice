const caeser = (string) =>
{
	stringArr = string.split("");
	let newStringArr = [];
	stringArr.forEach(char =>
	{
		if (char == " " || char.match(/[!@#$%^&*.(),/\\]/g)) return newStringArr.push(char);
		if (char === "Z") newStringArr.push("A");
		else if (char === "z") newStringArr.push("a");
		else newStringArr.push(String.fromCharCode(char.charCodeAt(0) + 1));
	});
	return newStringArr.join("");
}

module.exports = caeser;
