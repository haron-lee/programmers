function solution(age) {
    var answer = 0;
    if (0 < age <= 120) {
        answer = 2023 - age;
    }
    return answer;
}