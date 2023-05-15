function solution(n) {
    let answer = 0;
    
    // n이 0이 될 때까지 반복
    while (n > 0) {
        answer++;
        // 3을 포함하고 있는 숫자라면 continue, 예를 들어 43
        if(answer.toString().split("").includes("3")) continue;
        // 3으로 나누어 나머지가 0인것도 continue
        if(answer % 3 === 0) continue;
        n--;
    }
    
    return answer;
}