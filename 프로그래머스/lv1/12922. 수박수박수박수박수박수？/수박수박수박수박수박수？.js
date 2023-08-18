function solution(n) {
    const answer = Array(n).fill('수박');
    return answer.join('').slice(0, n);
}