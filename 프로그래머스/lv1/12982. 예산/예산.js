function solution(d, budget) {
    let count = 0; 
    d.sort((a, b) => a - b); 

    for (const num of d) {
        if (budget - num >= 0) { 
            budget -= num; 
            count++; 
        } else break; 
    }

    return count; 
}
