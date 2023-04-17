function solution(my_string) {
    const answer = my_string
        .match(/[0-9]/g)
        .reduce((a, b) => parseInt(a) + parseInt(b), 0);
    return answer;
}