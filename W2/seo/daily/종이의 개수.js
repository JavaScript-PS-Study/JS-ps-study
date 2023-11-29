/*
 * @url https://www.acmicpc.net/problem/1780
 * @date 23-11-28
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;

const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.split('\n')
	.map(
		el =>
			el
				.trim()
				.split(' ')
				.map(el => Number(el) + 1), // 2로 바꿔주기
	);

solution(input);
// 분할정복

function solution(input) {
	const answer = [0, 0, 0];
	const size = input.shift() - 1; // 1 더한 것 보정

	divide(0, 0, size);

	answer.forEach(e => console.log(e));

	function check(indexY, indexX, nextSize) {
		const initVal = input[indexY][indexX];

		for (let y = indexY; y < indexY + nextSize; y++) {
			for (let x = indexX; x < indexX + nextSize; x++) {
				if (input[y][x] !== initVal) return false;
			}
		}
		return true;
	}

	function divide(indexY, indexX, size) {
		if (check(indexY, indexX, size)) {
			answer[input[indexY][indexX]]++;
			return;
		}

		const nextSize = size / 3;
		const sizes = [0, nextSize, nextSize + nextSize];
		const sizeComb = sizes.reduce((acc, first) => {
			sizes.forEach(second => acc.push([first, second]));
			return acc;
		}, []);

		sizeComb.forEach(([plusYSize, plusXSize]) =>
			divide(indexY + plusYSize, indexX + plusXSize, nextSize),
		);
	}
}
