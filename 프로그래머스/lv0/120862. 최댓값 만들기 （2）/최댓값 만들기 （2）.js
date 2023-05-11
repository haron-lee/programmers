function solution(numbers) {
    let max = numbers[0] * numbers[1]; // 비교하기 위해 값을 넣어놓기 
    
    for(let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            if(max < numbers[i] * numbers[j]) { // numbers의 i와 j를 곱해서 큰 값을 max에 저장
                max = numbers[i] * numbers[j];
            }
        }
    }
    return max;
}