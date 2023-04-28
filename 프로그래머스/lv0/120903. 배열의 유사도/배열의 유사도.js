function solution(s1, s2) {
    var answer = s1.filter((el) => s2.indexOf(el));
    
    return answer;
}