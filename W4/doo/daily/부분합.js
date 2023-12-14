// 백준 1806 부분합
// https://www.acmicpc.net/problem/1806

const fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

// 수열 크기 N
// 연속된 수들의 부분합 기준이 되는 S
// 부분합 >= S 중 최소의 길이

const [N, S] = input[0].trim().split(" ").map(Number);
const arr = input[1].trim().split(" ").map(Number);

function solution() {
  let st = 0;
  let ed = 0;
  let sum = arr[st];
  let ans = 100000;

  for (st = 0; st < N; st++) {
    while (sum < S && ed < N) {
      ed += 1;
      sum += arr[ed];
    }
    if (sum >= S) {
      ans = Math.min(ed - st + 1, ans);
    }
    sum -= arr[st];
  }
  return ans === 100000 ? 0 : ans;
}

console.log(solution());
