/*
 * @url https://school.programmers.co.kr/learn/courses/30/lessons/150369
 * @date 23-11-23, 23-11-24
 */

function solution(cap, n, deliveries, pickups) {
	// i 배달해야 하는 가장 먼 집, j 픽업해야 하는 가장 먼집
	let [i, j] = [n - 1, n - 1];
	let answer = 0;

	while (i >= 0 && deliveries[i] === 0) i -= 1;
	while (j >= 0 && pickups[j] === 0) j -= 1;

	// 배달
	while (i >= 0 || j >= 0) {
		answer += (Math.max(i, j) + 1) * 2;

		let curCap = cap;

		while (curCap > 0 && i >= 0) {
			if (deliveries[i] > curCap) {
				deliveries[i] -= curCap;
				curCap = 0;
			} else {
				curCap -= deliveries[i];
				deliveries[i] = 0;

				while (i >= 0 && deliveries[i] === 0) {
					i -= 1;
				}
			}
		}

		// 수거
		curCap = cap;

		while (curCap > 0 && j >= 0) {
			if (pickups[j] > curCap) {
				pickups[j] -= curCap;
				curCap = 0;
			} else {
				curCap -= pickups[j];
				pickups[j] = 0;

				while (j >= 0 && pickups[j] === 0) {
					j -= 1;
				}
			}
		}
	}

	return answer;
}
