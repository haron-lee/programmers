function solution(num, count = 0) {
    if (num === 1) {
        return count;
    }

    if (count >= 500) {
        return -1; // 500번 이상 시도해도 1이 안 나온 경우
    }

    if (num % 2 === 0) {
        return solution(num / 2, count + 1);
    } else {
        return solution(num * 3 + 1, count + 1);
    }
}