function solution(numbers) {
    var answer = '';
    
    answer = numbers.map((el) => el + ''); // ["6", "10", "2"] string으로 변환 새로운 배열 반환
    answer = answer.sort((a, b) => (b+a)-(a+b)).join(""); // 두개의 string을 더해서 더 큰 수를 내림차순으로 정렬 

    if(answer[0] === "0") {
        return "0"
    } else {
        return answer;
    }
}
