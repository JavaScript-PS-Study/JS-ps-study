// 백준 2003 수들의 합2

const fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = input[1].trim().split(" ").map(Number);

// 방법1. 투포인터 (구간합)
function sol() {
  // 구간합 구하는 시작점 start, 끝점 end, 구간합 sum, 문제의 답 ans
  let sum = A[0];
  let end = 0;
  let ans = 0;

  // 구간합 > M : start++
  for (let start = 0; start < N; start++) {
    // 구간합 < M : end++
    while (sum < M && end < N) {
      end += 1;
      sum += A[end];
    }
    if (sum === M) {
      ans += 1;
      end += 1;
      sum += A[end];
    }
    sum -= A[start];
  }
  return ans;
}

/* 방법2. 누적합 계산
function sol() {
  let end = 0;
  let ans = 0;
  let temp = 0;

  const tempsum = A.reduce(
    (prev, cur) => {
      temp += cur;
      prev.push(temp);
      return prev;
    },
    [0]
  ); // 누적합 구하기, 이후 계산에서 인덱스차이로 인한 오류 방지용 초기값 0

  for (let start = 0; start <= N; start++) {
    while (end <= N && tempsum[end] - tempsum[start] <= M) {
      if (tempsum[end] - tempsum[start] === M) {
        ans += 1;
      }
      end += 1;
    }
  }
  return ans;
}
*/

console.log(sol());
