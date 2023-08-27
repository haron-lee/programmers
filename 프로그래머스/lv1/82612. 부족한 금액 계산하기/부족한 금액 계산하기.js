function solution(price, money, count) {
    const total = Array.from({length: count}, (_, i) => price * (i+1)).reduce((a, b) => a + b, 0);

    return total - money > 0 ? total - money : 0;
}