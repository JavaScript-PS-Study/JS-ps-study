/*
 * @url https://www.acmicpc.net/problem/11559
 * @date 23-12-14
 */

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const data = [];

rl.on('line', input => {
	data.push(input);
}).on('close', () => {
	const board = data.map(i => i.split(''));
	const ROW_LENGTH = board.length;
	const COL_LENGTH = board[0].length;

	const [dx, dy] = [
		[-1, 1, 0, 0],
		[0, 0, -1, 1],
	];

	const bfs = (x, y, visited) => {
		// 방문 좌표 기록
		const traceLog = [];
		const queue = [];
		const value = board[x][y];
		traceLog.push([x, y]);
		queue.push([x, y, value]);
		visited[x][y] = true;

		while (queue.length) {
			const [x, y, value] = queue.shift();

			for (let i = 0; i < 4; i++) {
				const nx = x + dx[i];
				const ny = y + dy[i];

				if (
					nx < 0 ||
					nx >= ROW_LENGTH ||
					ny < 0 ||
					ny >= COL_LENGTH ||
					board[nx][ny] === '.' ||
					board[nx][ny] !== value ||
					visited[nx][ny]
				)
					continue;

				traceLog.push([nx, ny]);
				queue.push([nx, ny, value]);
				visited[nx][ny] = true;
			}
		}

		// 인접 4곳 이상 방문시
		if (traceLog.length >= 4) {
			traceLog.forEach(i => {
				const [x, y] = i;
				board[x][y] = '.';
			});
			return true;
		}
		return false;
	};

	let result = 0;
	while (1) {
		let isChangeBoard = [];
		// 탐색
		const visited = new Array(ROW_LENGTH).fill().map(() => new Array(COL_LENGTH).fill(false));
		for (let i = 0; i < ROW_LENGTH; i++) {
			for (let j = 0; j < COL_LENGTH; j++) {
				if (board[i][j] === '.') continue;
				if (!visited[i][j]) {
					isChangeBoard.push(bfs(i, j, visited));
				}
			}
		}

		// 변한곳이 없다면 while문 탈출
		if (!isChangeBoard.some(i => i)) break;

		//console.log(board.map((i) => i.join(' ')).join('\n'));
		//console.log('===');

		// 이동
		for (let i = 0; i < COL_LENGTH; i++) {
			let dotRowIndex = ROW_LENGTH - 1;
			for (let j = ROW_LENGTH - 1; j >= 0; j--) {
				const value = board[j][i];
				if (value === '.') {
					dotRowIndex = j; // 가장 아래 있는 . 을 찾고 break
					break;
				}
			}

			for (let j = dotRowIndex; j >= 0; j--) {
				const value = board[j][i];
				if (value === '.') continue;
				[board[dotRowIndex][i], board[j][i]] = [board[j][i], board[dotRowIndex][i]];
				dotRowIndex -= 1;
			}
		}

		result += 1;
		//console.log(board.map((i) => i.join(' ')).join('\n'));
		//console.log('=========');
	}
	console.log(result);

	process.exit();
});
