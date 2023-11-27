/*
 * @url https://school.programmers.co.kr/learn/courses/30/lessons/92341
 * @date 23-11-27
 */

function solution(fees, records) {
	const LAST_TIME = 23 * 60 + 59;
	const convertTime = timeString => {
		const [h, m] = timeString.split(':').map(Number);
		return h * 60 + m;
	};

	const info = new Map();
	records.forEach((record, index) => {
		const [time, carNum, inOut] = record.split(' ');
		const convertedTime = convertTime(time);

		info.set(carNum, info.has(carNum) ? [...info.get(carNum), convertedTime] : [convertedTime]);
	});

	for (let [carNum, value] of info) {
		const calcTimeArr = [];

		let index = 0;
		while (index < value.length - 1) {
			const [inTime, ouTime] = value.slice(index, index + 2);
			calcTimeArr.push(ouTime - inTime);
			index += 2;
		}
		if (value.length % 2 === 1) calcTimeArr.push(LAST_TIME - value.pop());

		const totalUseTime = calcTimeArr.reduce((a, b) => a + b);

		const totalBasicPrice = fees[1];

		const totalExtraPrice =
			totalUseTime > fees[0] ? Math.ceil((totalUseTime - fees[0]) / fees[2]) * fees[3] : 0;

		info.set(carNum, totalBasicPrice + totalExtraPrice);
	}
	const result = [];

	[...info]
		.sort((a, b) => Number(a[0]) - Number(b[0]))
		.forEach(i => {
			result.push(i[1]);
		});

	return result;
}
