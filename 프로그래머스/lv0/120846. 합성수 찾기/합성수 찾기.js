function solution(n) {
let answer = 0;
const num = n;
let composites = Array.from({length: num - 1}, (_, index) => index + 2); // 2부터 n까지 배열만들기 
    
// filter 함수를 사용하여 합성수만 찾기
composites = composites.filter(num => {
    // num의 제곱근까지 나눠보기
    for (let i = 2; i <= Math.sqrt(num); i++) {  
        // 나누어떨어지는 수가 있다면 true 반환하여 filter에서 걸러내기
        if (num % i === 0) {
            return true;
        }
    }
    // 나누어떨어지는 수가 없다면 false를 반환해서 배열에 추가하기
    return false;
  });
    
return composites.length;
}