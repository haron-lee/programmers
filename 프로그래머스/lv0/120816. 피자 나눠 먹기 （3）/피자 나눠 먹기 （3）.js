function solution(slice, n) {
    var answer = 0;
    if(2 <= slice <= 10 && 1 <= n <= 100) answer=Math.ceil(n/slice);
    return answer;
}