/*
 * @url https://school.programmers.co.kr/learn/courses/30/lessons/92335
 * @date 23-11-3
 */

// 두번째 풀이
function solution(n, k) {
	return n
		.toString(k) // K진수 변환
		.split('0') // 0을 기준으로 배열로 분할
		.filter(cur => isPrime(Number(cur))).length; // 소수만 필터링
}

// 첫번째 풀이
function solution(n, k) {
	let answer = 0;
	const num = n.toString(k);
	num.split('0').forEach(cur => {
		if (isPrime(Number(cur))) answer++;
	});

	return answer;
}

function isPrime(num) {
	if (num <= 1) return false;
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}
	return true;
}
