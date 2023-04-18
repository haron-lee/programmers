function solution(s) {
  let answer = 0;
  let prev = 0; // 이전 값 저장 변수
  let arr = s.split(" "); // 공백으로 나눠서 배열로 반환
                                   
  for (let el of arr) {
    if (el !== "Z") {
      let num = parseInt(el);
      answer += num;
      prev = num; // 이전 값 저장
    } else {
      answer -= prev; // 이전 값 빼기
    }
  }
    
  return answer;
}