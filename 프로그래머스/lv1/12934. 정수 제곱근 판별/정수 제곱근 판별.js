function solution(n) {
    let sqrt = Math.sqrt(n); // n의 제곱근
    return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1 // 제곱근+1의 제곱값 
}