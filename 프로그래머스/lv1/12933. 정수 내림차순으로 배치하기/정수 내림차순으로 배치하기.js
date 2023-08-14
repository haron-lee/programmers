function solution(n) {
    const digits = Array.from(n.toString()).map(Number);
    digits.sort((a, b) => b - a);
    return parseInt(digits.join(''));
}
