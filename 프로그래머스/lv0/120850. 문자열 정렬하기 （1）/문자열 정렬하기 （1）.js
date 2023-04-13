function solution(my_string) {
    var answer = [];
    
    // a-z까지 문자열을 없애주고, 배열로 변환, 오름차순으로 할당
    answer = my_string.replace(/[a-z]/gi, "").split("").sort((a, b) => a - b);
    // 문자열인 숫자를 number type으로 바꿔주며 새로운 배열로 반환
    answer = answer.map((el) => parseInt(el));
    

    console.log(answer)
    
    return answer;
}