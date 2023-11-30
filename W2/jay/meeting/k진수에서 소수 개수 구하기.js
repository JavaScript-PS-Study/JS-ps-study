/*
 * @url https://school.programmers.co.kr/learn/courses/30/lessons/92335
 * @date 23-11-28
 */

function isPrime(num) {
	if (num <= 1) {
		return false;
	}
	const sqrtNum = Math.sqrt(num);
	for (let i = 2; i <= sqrtNum; i++) {
		if (num % i === 0) return false;
	}
	return true;
}

function solution(n, k) {
	let answer = 0;
	const nTok = n.toString(k);
	const nTokArr = nTok.split('0');
	nTokArr.forEach(i => {
		if (isPrime(i)) answer++;
	});
	return answer;
}
