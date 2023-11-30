/*
 * @url https://school.programmers.co.kr/learn/courses/30/lessons/92334
 * @date 23-11-30
 */

function solution(id_list, report, k) {
	const answer = new Array(id_list.length).fill(0);

	const report_list = {};
	id_list.map(user => {
		report_list[user] = [];
	});
	report.map(user => {
		const [user_id, report_id] = user.split(' ');
		if (!report_list[report_id].includes(user_id)) {
			report_list[report_id].push(user_id);
		}
	});

	for (const reported_uid in report_list) {
		if (report_list[reported_uid].length >= k) {
			report_list[reported_uid].map(user => {
				answer[id_list.indexOf(user)]++;
			});
		}
	}

	return answer;
}
