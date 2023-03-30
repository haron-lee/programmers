function solution(hp) {
    var answer = ~~(hp / 5) + ~~((hp % 5)/3) + ~~((hp % 5)%3);
    return answer;
}