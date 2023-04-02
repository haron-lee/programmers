function solution(rsp) {
    var answer = [];
    const r = 0;
    const s = 2;
    const p = 5;
    for (let i of rsp) {
        if(i == 0) {
            answer.push(p);
        } else if (i == 2) {
            answer.push(r);
        } else {
            answer.push(s);
        }
    }
    
    return answer.join("");
}