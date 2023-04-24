function solution(my_string, num1, num2) {
    let answer = [...my_string]; // my_string 배열로 저장 
    answer.splice(num1, 1, my_string[num2]); // num1 인덱스 자리를 한개 지우고 추가
    answer.splice(num2, 1, my_string[num1]); // num2 인덱스 자리를 한개 지우고 추가
    
    return answer.join("");
}