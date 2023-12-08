/*
 * @url https://school.programmers.co.kr/learn/courses/30/lessons/118667
 * @date 23-12-08
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
