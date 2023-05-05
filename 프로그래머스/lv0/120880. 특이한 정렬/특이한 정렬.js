function solution(numlist, n) {
return numlist.sort((a, b) => {
        const zero = Math.abs(a-n) - Math.abs(b-n);
        // 앞 요소와 뒤 요소에 n을 뺀 절대값을 비교 
        // 뺀 값이 양수, 음수가 아니라 0이 나오면 그때는 그 숫자를 비교
       if(zero === 0) { // 0이 나오면 숫자를 내림차순으로 return 
           return b - a;
       } 
        return zero // 0이 아니면 zero그대로 
    });
}

