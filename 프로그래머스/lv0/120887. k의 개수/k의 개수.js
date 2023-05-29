function solution(i, j, k) {
    let answer = 0;
    const arr = new Array(j - i + 1).fill().map((_, index) => index + i);
    
    for(let x = 0; x < arr.length; x++) {
        let arrInArr = String(arr[x]).split('');
        
        if(arrInArr.length > 1) {
            arrInArr.forEach((el) => {
                if(el === String(k))  answer++
            })
        } 
        
        if(arrInArr == String(k)) {
            answer++;
        }
    }
    
    return answer;
}