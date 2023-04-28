function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    let splitArr = quiz[i].split(' '); // 공백으로 나누기 ['3', '-', '4', '=', '-3']
    let x = parseInt(splitArr[0]); // 첫번째 숫자
    let y = parseInt(splitArr[2]); // 연산자 다음 숫자
    let operator = splitArr[1]; // 연산자 
    let result = parseInt(splitArr[4]); // 결과값 
    if (operator === '+') {
      if (x + y === result) { // 결과값이랑 같으면
        answer.push('O'); // 'O'를 넣기
      } else {
        answer.push('X'); // 아니면 'X'
      }
    } else if (operator === '-') {
      if (x - y === result) {
        answer.push('O');
      } else {
        answer.push('X');
      }
    }
  }
  return answer;
}