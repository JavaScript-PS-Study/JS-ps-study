/*
 * @url https://www.acmicpc.net/problem/1074
 * @date 23-11-28
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = require('fs').readFileSync(filePath).toString().split(' ').map(Number);
solution(input);

// 분할정복
function solution(input) {
	const [N, targetY, targetX] = input;
	const mapLength = 2 ** N;

	console.log(getSequence(targetY, targetX, mapLength) - 1);

	/**
	 * 주어진 좌표의 위치를 판별하는 함수
	 * 1 2
	 * 3 4
	 */
	function getSectionNumber(indexY, indexX, size) {
		const mid = size / 2;
		const isTop = indexY < mid;
		const isLeft = indexX < mid;

		if (isTop && isLeft) return 0;
		if (isTop && !isLeft) return 1;
		if (!isTop && isLeft) return 2;
		if (!isTop && !isLeft) return 3;
	}

	// 탐색 시퀀스 출력 재귀 함수
	function getSequence(indexY, indexX, size) {
		if (size === 2) {
			if (indexY === 0 && indexX === 0) return 1;
			if (indexY === 0 && indexX === 1) return 2;
			if (indexY === 1 && indexX === 0) return 3;
			return 4;
		}
		const sectionNumber = getSectionNumber(indexY, indexX, size);
		const sectionUnit = size / 2;

		// y는 section num이 2,3일 경우, -size
		// x는 section num이 1,3 일 경우 -size
		if (sectionNumber === 2 || sectionNumber === 3) {
			indexY -= sectionUnit;
		}
		if (sectionNumber === 1 || sectionNumber === 3) {
			indexX -= sectionUnit;
		}
		const adjustVal = getSequence(indexY, indexX, size / 2);
		return adjustVal + sectionNumber * sectionUnit ** 2;
	}
}
