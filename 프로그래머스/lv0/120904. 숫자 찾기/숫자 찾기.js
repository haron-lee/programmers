function solution(num, k) {
    let answer = '';
    let char = String(k);
    let str = String(num);
    
    answer = str.indexOf(char);
    
    return answer == -1? -1 : parseInt(answer)+1
}