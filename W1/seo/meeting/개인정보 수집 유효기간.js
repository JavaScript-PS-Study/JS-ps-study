/*
 * @url https://school.programmers.co.kr/learn/courses/30/lessons/150370
 * @date 23-11-20
 */

// 두번째 풀이 : @date 23-11-23
function solution(today, terms, privacies) {
	var answer = [];
	const [year, month, day] = today.split('.').map(el => +el);
	const currentTime = year * 12 * 28 + month * 28 + day;

	const termsHash = terms.reduce((acc, cur) => {
		acc[cur[0]] = +cur.slice(2) * 28;
		return acc;
	}, {});

	privacies.forEach((strDateAndTerm, idx) => {
		let [thisDate, term] = strDateAndTerm.split(' ');
		let [thisYear, thisMonth, thisDay] = thisDate.split('.').map(el => +el);
		const privaciesTime = thisYear * 12 * 28 + thisMonth * 28 + thisDay + termsHash[term];
		if (privaciesTime <= currentTime) answer.push(idx + 1);
	});

	return answer;
}

// 첫번째 풀이 : @date 23-11-20
function solution(today, terms, privacies) {
	let answer = [];

	today = today.split('.').map(el => +el);

	terms = terms.reduce((acc, cur) => {
		acc[cur[0]] = +cur.slice(2);
		return acc;
	}, {});

	privacies.forEach((cur, idx) => {
		let [privacyDate, termType] = cur.split(' ');
		privacyDate = addDate(privacyDate, terms[termType]);

		if (today[0] > privacyDate[0]) answer.push(idx + 1);
		else if (today[0] === privacyDate[0] && today[1] > privacyDate[1]) answer.push(idx + 1);
		else if (
			today[0] === privacyDate[0] &&
			today[1] === privacyDate[1] &&
			today[2] > privacyDate[2]
		)
			answer.push(idx + 1);
	});

	return answer;
}

function addDate(date, addMonth) {
	let [year, month, day] = date.split('.').map(el => +el);

	month += addMonth;
	day--;

	if (day === 0) {
		month--;
		day = 28;
	}

	if (month > 12) {
		year += Math.floor(month / 12);
		month %= 12;
	}

	if (month === 0) {
		year--;
		month = 12;
	}

	return [year, month, day];
}
