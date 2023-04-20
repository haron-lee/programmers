function solution(cipher, code) {
    return [...cipher].filter((e,i) => (i + 1) % code === 0).join("");
}

// cipher 배열 만들기, cipher의 인덱스 + 1 % code가 0인 값만 걸러서 문자열로 만들어주기. 