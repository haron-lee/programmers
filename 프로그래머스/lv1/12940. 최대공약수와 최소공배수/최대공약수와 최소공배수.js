function solution(n, m) {
    const getGCD = (a, b) => b > 0? getGCD(b, a % b) : a;
    const gcd = getGCD(n, m);
    const lcm = (n * m) / gcd;
    
    return [gcd, lcm];
}