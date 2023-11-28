// 백준 1932 정수 삼각형 (실버1)

const fs = require("fs");
const INPUTFILE = "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

const n = Number(input[0]);
// 삼각형 한 줄씩 숫자 입력받기
const triangle = [];
for (let i = 0; i < n; i++) {
  triangle.push(input[i + 1].split(" ").map(Number));
}

const sol = () => {
  for (let j = 1; j < n; j++) {
    for (let k = 0; k < triangle[j].length; k++) {
      // 대각선 왼쪽 또는 대각선 오른쪽에 있는 것 중 선택가능하다는 조건에 의해
      if (k == 0) triangle[j][k] += triangle[j - 1][k];
      else if (k == triangle[j].length - 1)
        triangle[j][k] = triangle[j - 1][k - 1];
      // 누적 합 최대를 만족하기 위해서
      // j번째 행까지 누적합 += j-1번째 행에서 선택 가능한 값 중 최대값
      else
        triangle[j][k] += Math.max(triangle[j - 1][k - 1], triangle[j - 1][k]);
    }
  }
  const ans = Math.max(...triangle[n - 1]);
  return ans;
};

console.log(sol());
