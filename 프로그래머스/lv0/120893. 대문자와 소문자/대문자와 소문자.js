function solution(my_string) {
    var answer = '';
	for(let el of my_string){ // 문자열 순회
		if(el === el.toUpperCase()){ // 대문자와 같다면
    		answer += el.toLowerCase(); // 소문자로 변환해서 answer에 더하기
    	} else answer += el.toUpperCase(); // 아니면 대문자로 answer에 더하기
    }
    return answer;
}