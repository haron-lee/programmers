function solution(bin1, bin2) {
    const binFirst = parseInt(bin1, 2); // 2
    const binSecond = parseInt(bin2, 2); // 3
    let answer = binFirst + binSecond; // 5
  return answer.toString(2); // 이진수로 바꾸기
}