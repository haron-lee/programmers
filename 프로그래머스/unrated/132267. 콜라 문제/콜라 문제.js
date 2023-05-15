function solution(a, b, n) {
    if (n < a) return 0; // 빈 병의 갯수가 a보다 적으면 0 이런
    const bottles = Math.floor(n / a) * b; // (빈병 개수 / a) * b개 얻을 수 있는 새로운 병
    // (새로운 병 + 계산에서 제외된 남은 병)을 재귀적으로 반복
    return bottles + solution(a, b, bottles + (n % a));
}

