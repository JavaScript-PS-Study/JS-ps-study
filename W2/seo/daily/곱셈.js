/*
 * @url https://www.acmicpc.net/problem/1629
 * @date 23-11-29
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;

const input = require('fs').readFileSync(filePath).toString().split(' ').map(BigInt);

console.log(solution(input).toString());

function solution(input) {
	const [base, exponent, divider] = input;
	return pow(exponent);

	function pow(exponent) {
		if (exponent === 1n) {
			return base % divider;
		}

		const half = pow(exponent / 2n) % divider;

		if (exponent % 2n) {
			return (half * half * (base % divider)) % divider;
		}

		return (half * half) % divider;
	}
}
