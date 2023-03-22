function solution(money) {
    var answer = [];
    const coffee = 5500;
    
    answer.push (Math.floor(money / coffee));
    answer.push (Math.floor(money % coffee));
    
    return answer;
}