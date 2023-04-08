function solution(box, n) {
    var answer = 0;
    answer = box.map((el) => Math.floor(el / n)); // box의 각 요소를 n으로 나눈 새로운 배열 answer에 할당
    answer = answer.reduce((a, b) => a * b); // answer 배열 요소끼리 곱하기
    return answer;
}

// 가로 / 모서리 길이
// 세로 / 모서리 길이
// 높이 / 모서리 길이
// 각 가로,세로,높이 면에 들어갈 수 있는 정육면체의 개수를 알 수 있다. 그 개수를 곱해주면 결과값이 나온다. 
