/*
 * @url https://school.programmers.co.kr/learn/courses/30/lessons/118666/solution_groups?language=javascript&type=my
 * @date 23-12-08
 */

// 두번째 풀이
function solution(survey, choices) {
	const check = new Map();
	const types = ['RT', 'CF', 'JM', 'AN'];

	types.forEach(el => el.split('').forEach(el => check.set(el, 0))); // initializing

	choices.forEach(
		(choice, idx) => (check.get(survey[idx][choice < 4 ? 0 : 1]) += Math.abs(choice - 4)),
	);

	return types.map(([a, b]) => (check[b] > check[a] ? b : a)).join('');
}

// 첫번째 풀이
function solution(survey, choices) {
	// 성격 유형 별 점수 검사 객체
	const check = survey.reduce((acc, cur, idx) => {
		if (choices[idx] < 4) {
			const hasValue = acc.get(cur[0]);
			if (hasValue) acc.set(cur[0], hasValue + Math.abs(choices[idx] - 4));
			else acc.set(cur[0], Math.abs(choices[idx] - 4));
		} else if (choices[idx] > 4) {
			const hasValue = acc.get(cur[1]);
			if (hasValue) acc.set(cur[1], hasValue + choices[idx] - 4);
			else acc.set(cur[1], choices[idx] - 4);
		}
		return acc;
	}, new Map());

	// 지정된 쌍끼리의 객체 배열로 check hash에서 값 추출
	return [
		{ R: check.get('R') ?? 0, T: check.get('T') ?? 0 },
		{ C: check.get('C') ?? 0, F: check.get('F') ?? 0 },
		{ J: check.get('J') ?? 0, M: check.get('M') ?? 0 },
		{ A: check.get('A') ?? 0, N: check.get('N') ?? 0 },
	].reduce((acc, cur) => {
		const [firstKey, secondKey] = Object.keys(cur);
		const [firstType, secondType] = Object.values(cur);

		if (firstType === secondType) acc += keys.sort()[0]; // 알파벳 순으로 우선되는 것 추출
		if (firstType < secondType) acc += secondKey;
		if (firstType > secondType) acc += firstKey;

		return acc;
	}, '');
}
