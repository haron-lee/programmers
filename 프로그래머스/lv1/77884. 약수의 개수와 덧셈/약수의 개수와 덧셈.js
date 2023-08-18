function solution(left, right) {
    const arr = Array.from({ length: right - left + 1 }, (_, i) => left + i);
    return arr.reduce((acc, cur) => acc + (Math.sqrt(cur) % 1 === 0 ? -cur : cur), 0);
}