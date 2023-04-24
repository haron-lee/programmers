function solution(numbers) {
    const nums = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    nums.forEach((str, idx) => numbers = numbers.replaceAll(str, idx));
    // nums 각 요소의 index 값으로 replace해준다.
    
    return parseInt(numbers);
}