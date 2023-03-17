function solution(array) {
    var answer = 0
    const asc = array.sort((a,b) => a - b);
    const mid = Math.floor(array.length / 2);
    answer = asc[mid];
    return answer;
}