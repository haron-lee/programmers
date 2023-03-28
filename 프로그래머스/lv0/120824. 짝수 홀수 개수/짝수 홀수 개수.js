function solution(num_list) {
    var answer = [];
    let even = 0;
    let odd = 0;
    
    num_list.forEach(function(arr) {
        (arr % 2 == 0)? even += 1 : odd += 1;
    });
    answer.push(even);
    answer.push(odd);
    return answer;
}