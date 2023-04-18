function solution(strlist) {
    // for문 사용시
    // var answer = []; 
    // for (let el of strlist) { // 배열 순회
    //     answer.push(el.length); // 배열 안의 요소 하나씩 length 구하기
    // }
    return strlist.map((el) => el.length);
}