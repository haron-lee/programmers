function solution(s) {
  let answer = s.split(""); // split으로 한글자씩 나누어 배열로 변환
  const count = answer.reduce((count, char) => {
    count[char] = (count[char] || 0) + 1;
    return count;
  }, {});
    // spilt해준 배열에 reduce를 활용해 객체에 각 요소가 등장한 숫자를 키와 값으로 넣어주기. 
    // count는 처음 {} 빈객체로 시작, 각 char와 등장 숫자인 값을 객체에 누적해서 저장해준다. 
    // 예시: count["h"] = (count["h"] || 0) + 1; count안에 "h"가 있으면 +1만, 없으면 h: 0 + 1을 넣어준다. 
  
  answer = answer.filter((el) => count[el] === 1).sort();
    // answer 배열에서 filtering을 한다. count[요소]가 1이라면 가져온다. 가져온값을 오름차순 정렬. 
    
  return answer.join("");
}