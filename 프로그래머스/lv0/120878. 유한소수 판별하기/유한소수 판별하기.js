function solution(a, b) {
    let answer = 0;
    // 유클리드 호제법 최대공약수
    function gcd(a, b) {
        if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
  }
    // 최대 공약수 구하기
    const g = gcd(a, b);
    
    // 구한 최대공약수로 나누기
    answer = b / g;
    
    // 2, 5를 제외한 소수가 있는지 반복문으로 확인하기
    while(answer % 2 === 0 ) {
        answer = answer / 2
    }
    while (answer % 5 === 0) {
        answer = answer / 5
    }

    // 1이면 유한소수(소인수가 2, 5만)
  return answer === 1 ? 1 : 2;
}
