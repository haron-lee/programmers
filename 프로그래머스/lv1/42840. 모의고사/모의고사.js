// function solution(answers) {
//     var answer = [];
    
//     let answerArr = [0,0,0];
//     // [1,2,3,4,5]
//     let one =  [1, 2, 3, 4, 5]; // => 그대로.Length
//     let two = [2, 1, 2, 3, 2, 4, 2, 5]; // => []
//     let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // []
    
//     let max = Math.max(one, two, three);
    
//   return answer;
// }

function solution(answers) {
  var answer = [];
  let arr = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = 0; j < answers.length; j++) {
      if (answers[j] === arr[i][j % arr[i].length]) {
        count++;
      }
    }
    answer.push(count);
  }

  let max = 0;
  let answerArr = [];

  max = Math.max(...answer);

  answer.forEach((el, idx) => {
    if (el === max) {
      answerArr.push(idx + 1);
    }
  });

  return answerArr;
}