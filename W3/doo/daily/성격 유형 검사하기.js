function solution(survey, choices) {
  var answer = "";
  const base = ["RT", "CF", "JM", "AN"]; // 지표형 성격 유형 표
  let ansMap = new Map();
  base.forEach((ele) => {
    // 모든 성격유형 key에 대하여 value값 0으로 초기화
    ansMap.set(ele[0], 0);
    ansMap.set(ele[1], 0);
  });
  // 설문결과에 따라 점수표 채우기
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] > 4) {
      ansMap.set(survey[i][1], ansMap.get(survey[i][1]) + choices[i] - 4);
    }
    if (choices[i] < 4) {
      ansMap.set(survey[i][0], ansMap.get(survey[i][0]) + 4 - choices[i]);
    }
    if (choices[i] === 4) {
      ansMap.set(survey[i][0], ansMap.get(survey[i][0]) + 0);
      ansMap.set(survey[i][1], ansMap.get(survey[i][1]) + 0);
    }
  }

  // 각 성격유형들에 대해 점수 비교해 답 구하기
  base.forEach((item) => {
    cmp0 = ansMap.get(item[0]);
    cmp1 = ansMap.get(item[1]);
    // 점수가 같으면, 두 성격 유형 중 사전 순 결정
    cmp0 >= cmp1 ? (answer += item[0]) : (answer += item[1]);
  });

  return answer;
}
