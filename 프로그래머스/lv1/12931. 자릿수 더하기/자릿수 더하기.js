function solution(n){
    return n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
}