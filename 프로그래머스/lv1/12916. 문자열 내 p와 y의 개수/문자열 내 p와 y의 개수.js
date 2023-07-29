function solution(s) {
    let p = 0;
    let y = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i].toLowerCase() === 'p') {
            p++;
        } else if (s[i].toLowerCase() === 'y') {
            y++;
        }
    }
    
    return p === y ? true : false;
}
