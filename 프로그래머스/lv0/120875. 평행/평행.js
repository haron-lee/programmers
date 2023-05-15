function solution(dots) {
    var answer = 0;
    
    // 기울기 계산하기
    const leanCheck = (a, b, c, d) => {
        let abCheck = (b[1] - a[1]) / (b[0] - a[0]);
        let cdCheck = (d[1] - c[1]) / (d[0] - c[0]);
        if (abCheck === cdCheck) return answer += 1;
    }
    
    // 1-2, 3-4
    leanCheck(dots[0], dots[1], dots[2], dots[3]);
    // 1-3, 2-4
    leanCheck(dots[0], dots[2], dots[1], dots[3]);
    // 1-4, 2-3
    leanCheck(dots[0], dots[3], dots[1], dots[2]);
    
    return answer > 0 ? 1 : 0;
}
