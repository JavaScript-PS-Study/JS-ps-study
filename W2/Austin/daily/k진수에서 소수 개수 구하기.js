/*
 * @url https://school.programmers.co.kr/learn/courses/30/lessons/92335
 * @date 23-11-29
 */
function solution(n, k) {
	function checkPrime(num) {
		if (!num || num === 1) {
			return false;
		}
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i == 0) {
				return false;
			}
		}
		return true;
	}

	let convertedN = n.toString(k);

	convertedN = convertedN
		.split('0')
		.filter(i => i) // '10001'.split('0') >> [ '1', '', '', '1' ]
		.map(Number);

	return convertedN.filter(i => checkPrime(i)).length;
}
