function solution(s, n) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char >= 'A' && char <= 'Z') {
      const shiftedChar = String.fromCharCode(
        ((char.charCodeAt(0) - 'A'.charCodeAt(0) + n) % 26) + 'A'.charCodeAt(0)
      );
      answer += shiftedChar;
    } else if (char >= 'a' && char <= 'z') {
      const shiftedChar = String.fromCharCode(
        ((char.charCodeAt(0) - 'a'.charCodeAt(0) + n) % 26) + 'a'.charCodeAt(0)
      );
      answer += shiftedChar;
    } else {
      answer += char;
    }
  }

  return answer;
}