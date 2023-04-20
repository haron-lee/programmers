function solution(sides) {
  var answer = 0;
  let max = Math.max(...sides); // 가장 큰 수 저장
  
  answer = sides.reduce((a, b) => a + b, 0);
    // sides 배열 다 더해주기 

  return (answer - max) > max ? 1 : 2; 
    // answer - max 값이 max보다 크다면 1, 작다면 2 
}