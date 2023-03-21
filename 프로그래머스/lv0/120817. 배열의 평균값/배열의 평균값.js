function solution(numbers) {
    var all = numbers.reduce((a, b) => a + b);
    answer = all / numbers.length;
    return answer;
}