function solution(my_string) {
  return [...new Set(my_string)].join("");
}

// new Set으로 중복제거 된 값을 전개구문으로 배열로 만들고 join으로 문자열로 만들기