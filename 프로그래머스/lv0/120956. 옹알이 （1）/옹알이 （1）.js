function solution(babbling) {
    var answer = 0;
    // 이 중에서 하나로 시작하고, 해당 문자가 한 번 이상 반복되며, 전체 문자의 끝과 일치하는지를 확인
    const regex = /^(aya|ye|woo|ma)+$/;

    babbling.forEach(word => {
        if (regex.test(word)) answer++;  
    })

    return answer;
}