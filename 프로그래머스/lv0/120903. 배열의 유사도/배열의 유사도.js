function solution(s1, s2) {
    var answer = s1.filter(el => s2.includes(el));
    return answer.length;
}