function solution(fees, records) {
  var answer = [];

  function intoMinutes(form) {
    let form_temp = form.split(":");
    return Number(form_temp[0]) * 60 + Number(form_temp[1]);
  }

  const temprecords = new Map();
  const timerecords = new Map(); // 2번 이상 입출차하는 경우, 총 이용시간 연산을 위해
  const check = new Map(); // 출차하지 않은 차량 확인용

  records.forEach((record) => {
    const [time, car, what] = record.split(" ");

    if (what === "IN") {
      temprecords.set(car, intoMinutes(time));
      check.set(car, "I");
    }
    if (what === "OUT") {
      temprecords.set(car, intoMinutes(time) - temprecords.get(car));
      check.set(car, "O");
      timerecords.get(car) // 이미 입출차한 기록이 있다면
        ? timerecords.set(car, timerecords.get(car) + temprecords.get(car))
        : timerecords.set(car, temprecords.get(car));
    }
  });

  // 출차된 내역 없다면, 23:59 출차로 간주
  for (car of check) {
    if (car[1] == "I") {
      timerecords.get(car[0])
        ? timerecords.set(
            car[0],
            timerecords.get(car[0]) + 1439 - temprecords.get(car[0])
          )
        : timerecords.set(car[0], 1439 - temprecords.get(car[0])); // 1회 입차, 0회 출차인 경우
    }
  }
  const sortedrecords = [...timerecords].sort(); // 차 번호 오름차순 정렬
  sortedrecords.forEach((item) => {
    if (item[1] <= fees[0]) answer.push(fees[1]);
    if (item[1] > fees[0])
      answer.push(fees[1] + Math.ceil((item[1] - fees[0]) / fees[2]) * fees[3]);
  });

  return answer;
}
