function solution(array, n) {
  let answer = 0;
  let min = Math.min(...array.map((el) => Math.abs(el - n)));
  // array 요소 - n 의 수 중 가장 작은 값 min에 할당하기
  // 예: [ 3, 10, 28 ], 20
  // 28 - 20 = 8
  
  answer = array.sort((a, b) => a - b);
  // array 오름 차순 정렬 
  answer = answer.find((el) => Math.abs(el - n) === min);
  // 오름차순한 배열에서 el - n이 Min 값과 같은 친구 찾기 
  // 예 : [3, 10, 28], 20  
  // 28 - 20 === 8 
  return answer;
}