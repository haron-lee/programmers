function solution(sizes) {
    let short = [];
    let long = [];
    
    for (let i = 0; i < sizes.length; i++) {
        if(sizes[i][0] < sizes[i][1]) {
            short.push(sizes[i][0]);
            long.push(sizes[i][1]);
        } else {
            short.push(sizes[i][1]);
            long.push(sizes[i][0]);
        }
    }

    return Math.max(...short) * Math.max(...long);
}

// 짧은 길이만 모으고, 긴 길이만 모으자
// 짧은 길이의 가장 큰값과, 긴 길이의 가장 큰 값 곱하기 = 최소직사각형 
// [x, y] 구조분해 할당 풀어보고 싶다.. 
