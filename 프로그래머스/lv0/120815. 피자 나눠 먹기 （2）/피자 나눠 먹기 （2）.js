function solution(n) {
    let pizza = 6;
    let lcm = 1;
    while ( (lcm * pizza) % n !== 0) {
        lcm++;
    }
    
    return lcm;
}