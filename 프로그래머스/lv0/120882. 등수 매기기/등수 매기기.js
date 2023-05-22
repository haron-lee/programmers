function solution(score) {
    let average = score.map(([a, b]) => (a + b) / 2); // 평균 배열 만들기
    let sortedAverage = average.slice().sort((a, b) => b - a); // 내림차순 복사 배열
    
    // 같은 점수가 있을 때 index를 찾으면 첫번째 숫자의 index가 있음
    return average.map(e => sortedAverage.indexOf(e) + 1); 
}  

