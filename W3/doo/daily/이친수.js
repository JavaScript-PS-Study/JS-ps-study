const fs = require("fs");
const INPUTFILE = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(INPUTFILE).toString().trim().split("\n");

const N = Number(input);

function sol() {
  let p = [];

  p[1] = 1;
  p[2] = 1;

  if (N >= 3) {
    for (let i = 3; i <= N; i++) {
      p[i] = BigInt(p[i - 1]) + BigInt(p[i - 2]);
    }
  }

  return p[N].toString();
}
console.log(sol());


// 1차 풀이

// function sol() {
//   let p = [];
//   let p0 = [];
//   let p1 = [];

//   // 이친수의 맨앞자리 숫자 2개는 항상 1,0으로 고정
//   if (N === 1 || N === 2) return 1;

//   p0[3] = 1;
//   p1[3] = 0;
    
//   if (N >= 4) {
//     for (let i = 4; i <= N; i++) {
//       p0[i] = p0[i - 1] + p1[i - 1];
//       p1[i] = p0[i - 1];
//     }
//   }
    
//   p[N] = p0[N] * 2 + p1[N];
//   return p[N];
// }
