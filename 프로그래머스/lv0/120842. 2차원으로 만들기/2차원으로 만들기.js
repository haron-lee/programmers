function solution(num_list, n) {
    let answer = [];
    
   for (let i = 0; i < num_list.length; i += n) { // i에 n의 숫자만큼 더해준 값이 증가
    answer.push(num_list.slice(i, i + n)) // num_list에서 i와 i + n 위치 요소를 잘라 반환된 배열을 push
  }
    
    
    return answer;
}
