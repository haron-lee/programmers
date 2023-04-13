function solution(n) {
    let factorial = 1;
    let i = 2;
    while (factorial * i <= n) { // 1 * 2++ <= n factorial과 i를 곱한 값이 n보다 적을 때 까지
        factorial *= i; // factorial에 i와 factorial 곱한 값 저장
        i++; // i 증가
    }
    return i - 1; // 초과되어 나오기 때문에 -1을 해준다. 
}
