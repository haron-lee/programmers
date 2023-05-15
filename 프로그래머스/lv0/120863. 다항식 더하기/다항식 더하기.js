function solution(polynomial) {
    const arr = polynomial.split(' + ') // ['3x', '7', 'x']
    // x를 포함하는 요소를 찾아서 각 요소에 x를 공백으로 바꿔준 후 parseInt 만약 x가 없으면 1을 반환, 그 수를 더한 값을 xNum에 저장하기 
    const xNum = arr.filter(v => v.includes('x')).map(v => parseInt(v.replace('x', '')) || 1).reduce((a, c) => a + c, 0)
    // x가 아닌 요소를 찾아서 더해주기
    const num = arr.filter(v => !v.includes('x')).reduce((a, c) => a + parseInt(c), 0)
    const answer = []

    if (xNum){
        // xNum이 1이면 x만 push
        if (xNum === 1){
            answer.push('x')
        } else {
            // 그게 아니라면 xNum의 숫자와 x를 붙여서 push
            answer.push(`${xNum}x`)
        }
    }
    if (num){
        // 숫자가 있으면 숫자도 push
        answer.push(num)
    }
    //더하기로 join
    return answer.join(' + ');
}
