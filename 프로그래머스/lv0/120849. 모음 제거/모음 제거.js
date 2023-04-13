function solution(my_string) {
    var answer = '';
    
    answer = my_string.replace(/[aeiou]/gi, "");;
    
    return answer;
}