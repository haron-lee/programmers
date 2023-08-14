function solution(x) {
    const sumOfDigits = Array.from(x.toString()).map(Number).reduce((a, b) => a + b, 0);
    return x % sumOfDigits === 0;
}