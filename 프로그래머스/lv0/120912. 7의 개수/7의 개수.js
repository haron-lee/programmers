function solution(array) {
    let count = 0;
    array.forEach((el) => {
        const str = el.toString(); // 각 요소를 문자열로 변환
        for (let i = 0; i < str.length; i++) { // 반복문으로 요소의 문자열을 순회
            if(str[i] === '7') count++; // 7이 나오면 count를 ++ 
        }
    })
    return count
}
