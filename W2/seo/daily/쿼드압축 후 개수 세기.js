/*
 * @url https://school.programmers.co.kr/learn/courses/30/lessons/68936
 * @date 23-11-27
 */

function solution(arr) {
	const answer = [0, 0];
	const totalSize = arr.length;

	divide(0, 0, totalSize);

	return answer;

	function check(y, x, size) {
		for (let i = y; i < y + size; i++) {
			for (let j = x; j < x + size; j++) {
				if (arr[y][x] !== arr[i][j]) return false;
			}
		}

		return true;
	}

	function divide(startY, startX, size) {
		if (check(startY, startX, size)) {
			answer[arr[startY][startX]]++;
			return;
		}

		divide(startY, startX, size / 2);
		divide(startY + size / 2, startX, size / 2);
		divide(startY, startX + size / 2, size / 2);
		divide(startY + size / 2, startX + size / 2, size / 2);
	}
}
