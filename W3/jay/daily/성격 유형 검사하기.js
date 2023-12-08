/*
 * @url https://school.programmers.co.kr/learn/courses/30/lessons/118666
 * @date 23-12-07
 */

function solution(survey, choices) {
	const MBTI = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

	for (let i = 0; i < survey.length; i++) {
		const [disagree, agree] = survey[i];
		const choice = choices[i];
		const type = choice > 4 ? agree : disagree;

		MBTI[type] += Math.abs(choice - 4);
	}

	const types = ['RT', 'CF', 'JM', 'AN'];
	return types.map(type => (MBTI[type[1]] > MBTI[type[0]] ? type[1] : type[0])).join('');
}
