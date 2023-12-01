function solution(fees, records) {
  var answer = [];

  function intoMinutes(form) {
    var form_temp = form.split(":");
    return Number(form_temp[0]) * 60 + Number(form_temp[1]);
  }

  records.forEach((record) => {
    var [time, car, what] = record;

    let inCar = {}; // 입차 목록
    let outCar = {}; // 출차 목록

    console.log(what === "IN");

    if (what === "IN") {
      inCar[car] = intoMinutes(time);
    }
    if (what === "OUT") {
      outCar[car] = intoMinutes(time);
    }
    console.log(inCar, outCar);
  });

  inCar.forEach((car) => {
    if (!outCar.includes(car)) {
      outCar[car] = 23 * 60 + 59;
    }
  });
  Object.keys(inCar)
    .sort()
    .forEach(function (key) {
      orderedinCar[key] = inCar[key];
    });
  Object.keys(outCar)
    .sort()
    .forEach(function (key) {
      orderedoutCar[key] = outCar[key];
    });
  console.log(orderedinCar, orderedoutCar);

  // 출차시간-입차시간
  answer = inCar.reduce((prev, cur, i) => {
    // 누적 시간 계산 , 비교 후 비용 출력
  });

  return answer;
}
