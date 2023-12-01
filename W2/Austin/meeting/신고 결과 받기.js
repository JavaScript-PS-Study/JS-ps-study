/*
 * @url https://school.programmers.co.kr/learn/courses/30/lessons/92334
 * @date 23-11-28
 */
function solution(id_list, report, k) {
	const reportedInfo = new Map();

	// 신고당한 사람 : 신고한 사람들
	report.forEach(i => {
		const [from, to] = i.split(' ');

		const existReportList = reportedInfo.get(to);
		if (existReportList) {
			existReportList.add(from);
			reportedInfo.set(to, existReportList);
		}
		if (!existReportList) {
			reportedInfo.set(to, new Set().add(from));
		}
	});

	// 정지된 유저를 신고한 사람들
	// 신고자 : 횟수
	const reporterInfo = new Map();
	for (let [reported, reporter] of reportedInfo) {
		if (reporter.size < k) continue;

		for (let name of reporter) {
			reporterInfo.set(name, reporterInfo.has(name) ? reporterInfo.get(name) + 1 : 1);
		}
	}

	const result = [];
	id_list.forEach(i => {
		const reportCount = reporterInfo.get(i);
		if (reportCount) {
			result.push(reportCount);
		}
		if (!reportCount) {
			result.push(0);
		}
	});
	return result;
}
