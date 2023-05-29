function solution(A, B) {
    var answer = 0;
    let strA = A.split(''); // 	[ 'h', 'e', 'l', 'l', 'o' ]
    
    if(A === B) return 0;
    else {
        for(let i = 0; i < strA.length; i++) {
            strA.unshift(strA.pop());
            answer++;
            if(strA.join('') === B) return answer;
        }
        return -1;
    }
}