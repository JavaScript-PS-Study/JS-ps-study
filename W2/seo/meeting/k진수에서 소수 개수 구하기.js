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
	// 1은 소수가 아니다
	if (num === 1) return false;

	// 2는 소수 중 유일한 짝수이다.
	if (num % 2 === 0) {
		return num === 2 ? true : false;
	}

	// 홀수 중 다른 수에 의해 나눠지는지 판단한다.- 탐색 범위는 root num 까지
	for (let divider = 3; divider <= parseInt(Math.sqrt(num)); divider += 2) {
		if (num % divider === 0) {
			return false;
		}
	}

	return true;
}
