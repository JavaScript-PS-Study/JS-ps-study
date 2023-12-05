/*
 * @url https://school.programmers.co.kr/learn/courses/30/lessons/118667
 * @date 23-12-04
 */

/**
 * @param {number[]} queue1
 * @param {number[]} queue2
 * @returns {number}
 */
function solution(queue1, queue2) {
	let sumQ1 = queue1.reduce((acc, cur) => acc + cur, 0);
	let sumQ2 = queue2.reduce((acc, cur) => acc + cur, 0);

	if ((sumQ1 + sumQ2) % 2 === 1) return -1;

	const maxLoop = queue1.length * 3;
	let [q1idx, q2idx] = [0, 0];

	for (let i = 0; i < maxLoop; i++) {
		if (sumQ1 === sumQ2) return i;

		if (sumQ1 > sumQ2) {
			const popQ1Val = queue1[q1idx++];
			queue2.push(popQ1Val);
			sumQ2 += popQ1Val;
			sumQ1 -= popQ1Val;
			continue;
		}

		if (sumQ1 < sumQ2) {
			const popQ2Val = queue2[q2idx++];
			queue1.push(popQ2Val);
			sumQ1 += popQ2Val;
			sumQ2 -= popQ2Val;
			continue;
		}
	}

	return -1;
}

/*
 * 문제 풀이 흐름
 * 1. 큐1 , 큐2 의 값을 더한 각각의 변수 -> sumQ1, sumQ2
 * 2. sum 변수가 더 큰 q에서 더 작은 q로 무조건 보내야 함
 * 3. 아무리 작업해도 안되는 경우 측정
 * 		- try1 : 경우의 수 구하기. length ** 2 해서 maxLoop 측정
 * 				=> (signal: aborted (core dumped)) -> 산술 오버플로우 발생 -> Big int 안먹힘
 * 		- try2 : queue1.length * 2 + 1 - why?..
 *				=> [1,1,1] [1,5,1]  두개의 큐가 들어올 경우 총 9번 탐색을 해야 결과 도출 가능
 * 				=> 투포인터로 생각해보면 이해가 좀 더 쉬움
 *				=> n = len(q1) + len(q2) * 2
 *				=> 프로그래머스 테케는 maxLoop를 len*3만 해도 정답처리된다. 왜인지는 모르겠다.
 */
