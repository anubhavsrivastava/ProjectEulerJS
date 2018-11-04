/**
 * @param {number} max - max limit
 * @param {number} divisor - divisor
 * @returns Sum of all number divisible by divisor below max number
 */
function getDivisibleSum(divisor, max) {
	const maxMultiplier = Math.floor((max - 1) / divisor);
	return (divisor * maxMultiplier * (maxMultiplier + 1)) / 2;
}
const range = 1000;
console.log(getDivisibleSum(3, range) + getDivisibleSum(5, range) - getDivisibleSum(15, range));
