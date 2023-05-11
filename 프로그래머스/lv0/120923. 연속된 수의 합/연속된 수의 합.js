function solution(num, total) {
    let answer = [];
    let middle = Math.floor(total / num); // 중간값 4, 3 , 3
    let number =  Math.ceil(num / 2); // 2, 3, 2
    let start = (middle + 1) - (number); // 초기값
    
    for(let i = 0; i < num; i++) {
        answer.push(start++);
    }
    
    return answer;
}

// 배열의 가운데 숫자는 total / num 임 (12 / 3 = 4)
// 짝수일 경우를 따로 고려하는가?
// 처음 시작하는 초기값을 어떻게 구하지?
// num의 길이만큼의 배열을 만들어서 초기값부터 넣어주면 되는데.. 