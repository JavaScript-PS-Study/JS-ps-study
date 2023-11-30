function solution(n, k) {
    var answer = -1;
    
    let nums = n.toString(k).split("0");
    answer = nums.filter((num) => num !== "" && isPrime(Number(num))).length;  // 110011->[ '11', '', '11' ] 인 경우 빈 문자열 무시하기 위해

    function isPrime(num) {
      if (num === 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
    
    return answer;
}

// n을 k진수로 변환
// for문으로 0이 나올때까지 돌려서 0이 아닌 수들만 배열에 저장
// 배열에 담은 값들을 하나의 숫자로 변환
// 소수 여부 판별

// k_num = [];
// while (n > 0) {
//   k_num.push(n % k);
//   n = Math.floor(n / k);
// }
// k_num.reverse();
// temp = [];
// for (let i = 0; i < n; i++) {
//   if (k_num[i] !== 0) {
//     temp.push(k_num[i]);
//   }
//   if ((k_num[i] === 0) & (temp.length !== 0)) {
//     var testPrime = temp.reduce((prev, curr) => {
//       curr = curr * 10 ** (temp.length - 1 - i);
//       prev += curr;
//     }, 0);
//     temp = [];
//     isPrime(testPrime);
//   }
// }
