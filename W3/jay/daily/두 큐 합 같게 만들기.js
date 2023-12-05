function solution(queue1, queue2) {
	let answer = 0;
	let sum1 = queue1.reduce((a, b) => a + b, 0);
	let sum2 = queue2.reduce((a, b) => a + b, 0);

	if (sum1 === sum2) return 0;
	if ((sum1 + sum2) % 2 !== 0) return -1;
	let targetSum = (sum1 + sum2) / 2;

	while (sum1 !== targetSum || sum2 !== targetSum) {
		let transfer;
		if (sum1 > targetSum) {
			transfer = queue1.shift();
			sum1 -= transfer;
			sum2 += transfer;
			queue2.push(transfer);
		}
		if (sum2 > targetSum) {
			transfer = queue2.shift();
			sum1 += transfer;
			sum2 -= transfer;
			queue1.push(transfer);
		}
		answer += 1;
	}
	return answer;
}
