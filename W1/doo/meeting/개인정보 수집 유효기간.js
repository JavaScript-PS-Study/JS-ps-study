function solution(today, terms, privacies) {
    var answer = [];
    let privacies_arr = [];
    let terms_arr = [];
    
    let [today_year,today_month,today_date] = today.split(".").map(Number);  // 오늘 날짜
    let today_dates = today_year*12*28 + today_month*28 + today_date; // 날짜를 일 단위로 통일

    for(let i=0;i<privacies.length;i++){
        let [privacy_contents,privacy_name] = privacies[i].split(" ");  // 날짜 약관 종류
        let [privacies_year,privacies_month,privacies_date] = privacy_contents.split(".").map(Number);
        privacies_dates = privacies_year*12*28 + privacies_month*28 + privacies_date  // 날짜를 일 단위로 통일
        privacies_arr.push([privacy_name,privacies_dates]);
    }
    
    terms.forEach(item=>{
        let [terms_name,terms_period] = item.split(" ");  // 약관 종류, 유효기간
        terms_arr[terms_name] = terms_period;
    })
    
    for(let j=0;j<privacies_arr.length;j++){  // 개인정보 수집 목록에 대하여
        let period = terms_arr[privacies_arr[j][0]];  // 해당 약관의 유효기간
        // 오늘 날짜-개인정보수집일 >= 유효기간이면 파기해야함
        if(today_dates-privacies_arr[j][1] >= period*28)
            answer.push(j+1);
        else continue;
    }
  
    return answer;
}
