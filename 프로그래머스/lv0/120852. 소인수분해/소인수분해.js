function solution(n) {
    var answer = [];
    let divisor = 2; // 나눠질 수 

  while (n >= 2) { // n이 2이상일 동안 반복
    if (n % divisor === 0) { // n을 divisor로 나눴을 때 나머지가 0이라면
        if(!answer.includes(divisor)){ // 중복제거 [2, 2, 3] 
            answer.push(divisor); // answer에 push
        }
      n /= divisor; // 추가 후에 n을 divisor로 나눈다 
    } else {
      divisor++; // 나누어 떨어지지 않을 경우 divisor를 쁠쁠
    }
  }
    
    
    
    return answer;
}