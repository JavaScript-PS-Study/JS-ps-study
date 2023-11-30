// 백준 11727 2*n 타일링2 (실버3)

const fs = require('fs');
const INPUTFILE = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(INPUTFILE).toString().trim().split('\n');

const n = Number(input);
dp = new Array(1001).fill(0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= n; i++) {
	// 가로길이 n인 직사각형을 채우는 방법의 수
	// = 길이 n-1인 직사각형 채우는 방법의 수 (1*2 타일 추가하는 경우)
	// + 길이 n-2인 직사각형 채우는 방법의 수*2 (2*1 타일, 2*2 타일 추가하는 경우)
	dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}

console.log(dp[n]);
