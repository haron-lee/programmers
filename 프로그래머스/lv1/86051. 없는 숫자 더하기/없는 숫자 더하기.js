function solution(numbers) {
    const all = Array(10).fill().map((_, index) => index);
    
    const digits = all.filter(digit => !numbers.includes(digit)).reduce((acc, curr) => acc + curr, 0);
    
    return digits;
}