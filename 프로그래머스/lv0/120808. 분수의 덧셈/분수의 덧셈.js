function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let den = denom1 * denom2;
    let num = numer1*denom2 + numer2*denom1;
    let max = 1;
    for (let i = 2; i <= Math.min(num,den); i++) {
        if(num % i === 0 && den % i === 0) {
            max = i;
        }
    }
    answer.push(num/max);
    answer.push(den/max);
    return answer;
}