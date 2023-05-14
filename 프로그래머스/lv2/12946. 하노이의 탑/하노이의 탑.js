function solution(n) {
    let answer = [];
    
    function hanoi(n, from, to, via) {
        if(n === 1) {
            answer.push([from, to]);
        } else {
            hanoi(n - 1, from, via, to);
            answer.push([from, to]);
            hanoi(n - 1, via, to, from);
        }
    }
    hanoi(n, 1, 3, 2);
    return answer;
}

// 인수로 전달 n은 원반의 갯수, from 출발점, to 도달점, via 경유점