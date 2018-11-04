/**
 * @param {number} min - min range
 * @param {number} max - max range
 * @param {array} divisors - divisors array
 * @returns All divisible number for range for all divisors
 */
function getDivisibileNumbers(min, max, divisors) {
	let result = new Set();
	divisors.forEach(divisor => {
		let minMultiplier = Math.ceil(min / divisor);
		let maxMultiplier = Math.floor(max / divisor);
		[...new Array(maxMultiplier - minMultiplier + 1).keys()].map(t => result.add((t + min) * divisor));
	});
	return [...result];
}

console.log(getDivisibileNumbers(0, 99, [3, 5]).reduce((a, n) => a + n));
