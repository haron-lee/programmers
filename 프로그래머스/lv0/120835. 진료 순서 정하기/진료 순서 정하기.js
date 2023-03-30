function solution(emergency) {
    var answer;
    const arr = [...emergency];
    const order = emergency.sort((a, b) => b - a);
    answer = arr.map((e) => order.indexOf(e) + 1);
    
    return answer;
}