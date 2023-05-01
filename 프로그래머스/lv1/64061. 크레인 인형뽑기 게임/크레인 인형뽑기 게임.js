function solution(board, moves) {
  let basket = []; // 바구니
  let count = 0; // 인형 몇개 터졌는지

  // moves 길이만큼 순회
  for (let i = 0; i < moves.length; i++) {
    let el = moves[i] - 1; // moves의 element. 1번째를 0번째로

    // board 순회
    for (let j = 0; j < board.length; j++) {
      // 예시: board의 0번째 0번째가 0이 아니라면
      if (board[j][el] !== 0) {
        // basket 마지막 요소와, 넣은 요소가 같은지 비교하기
        if (basket[basket.length - 1] === board[j][el]) {
          // 같다면 빼버리기
          basket.pop();
          // 그리고 인형 2개가 터졌기에 +2
          count += 2;
        } else {
          // 같지 않으면 바구니에 쌓아주기
          basket.push(board[j][el]);
        }
        // 빼간 요소는 0이 되어야함.
        board[j][el] = 0;
        // 찰리님이 얘기했던 반복문 종료 넣어주기.
        break;
      }
    }
  }
  // 인형이 몇개터진건지 return
  return count;
}