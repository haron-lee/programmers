function solution(balls, share) {
  let count = 0; // 가능한 조합의 수를 저장할 변수
  // balls개의 구슬 중에서 share개의 구슬을 고르는 모든 경우의 수 계산
  for (let i = 0; i < balls - share + 1; i++) {
    // i부터 balls-1까지의 숫자 중에서 share-1개의 숫자를 고르는 모든 경우의 수 계산
    count += choose(balls - i - 1, share - 1);
  }
  return count;
}

// n개의 숫자 중에서 k개의 숫자를 고르는 경우의 수를 계산하는 함수
function choose(n, k) {
  let result = 1;
  // k개의 숫자를 고르는 경우의 수 계산
  for (let i = 1; i <= k; i++) {
    result *= n - k + i;
    result /= i;
  }
  return result;
}