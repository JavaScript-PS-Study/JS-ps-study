// 백준 1931 회의실 배정 (실버)

const fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

// 입력받기
const N = Number(input[0]);
let schedule = [];
for (let i = 0; i < N; i++) {
  var [s, e] = input[i + 1].split(" ").map(Number);
  schedule.push([s, e]);
}

schedule.sort((a, b) => a[1] - b[1] || a[0] - b[0]); // 다중 조건 정렬

var a_meeting_end, b_meeting_start; // 앞 회의 끝나는 시간, 뒷 회의 시작하는 시간
let ans = schedule.reduce((prev, cur, i) => {
  if (i === 0) {
    // 초기 값 설정
    prev.push(cur);
    a_meeting_end = schedule[i][1];
  } else {
    b_meeting_start = schedule[i][0];
    if (a_meeting_end <= b_meeting_start) {
      prev.push(cur);
      a_meeting_end = schedule[i][1];
    }
  }
  return prev;
}, []);

console.log(ans.length);
