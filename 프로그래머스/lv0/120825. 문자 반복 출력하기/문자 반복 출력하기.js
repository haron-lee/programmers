function solution(my_string, n) {
    var answer = '';
    if(2 <= my_string <= 5 && 2 <= n <= 10) {
        let string = my_string.split("");
        answer = string.map((e) => e.repeat(n)).join("");
    }
    return answer;
}
