function solution(s){
    let answer = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(") {answer += 1;} // 왼괄호과 나오면 = 1, 오른괄호 나오면 = 0
        else {answer -=1;}
        
        if(answer < 0) { // break 넣어주기 
            break;
        }
    }
    
    return answer === 0 ? true : false; // 0이나오면 () 완성, 다른 값이면 false
}