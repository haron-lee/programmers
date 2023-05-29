function solution(id_pw, db) {
    var answer = '';
    
    const user = db.find(user => user[0] === id_pw[0]); // 	[ 'meosseugi', '1234' ]
    
    if(user) {
        if(user[1] === id_pw[1]){
            answer = 'login';
        } else {
            answer = 'wrong pw';
        }
     } else {
        answer = 'fail';
    }

    
    return answer;
}

