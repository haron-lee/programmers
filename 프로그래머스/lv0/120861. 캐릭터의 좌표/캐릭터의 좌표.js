function solution(keyinput, board) {
    let [x, y] = [0, 0];
    let [bx, by] = board.map((e) => Math.floor(e / 2));
    
    for (let el of keyinput) {
        if(el === 'right') {
            x >= bx ? x = bx : x++;
        } else if (el === 'left') {
            x <= -bx ? x = -bx  : x--;
        } else if (el === 'up') {
            y >= by ? y = by : y++;
        } else if (el === 'down') {
            y <= -by ? y = -by : y--;
        }
    }
    
    return [x, y];
}

// up 1번째 +1, down 1번째 -1
// right 0번째 +1, left 0번째 -1
// board의 0번째 값의 나누기 2, 소수점 버린 후만큼 좌우로 가능
// board의 1번째 값의 나누기 2, 소수점 버린 후만큼 위아래로 가능 