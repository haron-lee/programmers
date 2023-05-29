function solution(chicken) {    
    let answer = 0;
    let chickenNum = chicken;
    let coupon = 0;

    function recursiveChicken(chicken) {
        let chickens = 0; 
        if (chicken === 0) {
        return;
        }

        chickens += Math.floor(chicken / 10);
        answer += Math.floor(chicken / 10);
        coupon += chicken % 10;
        if(coupon >= 10) {
            answer += 1;
        }
        recursiveChicken(chickens);
    }

    recursiveChicken(chickenNum);
  
    return answer;
}

