function solution(s) {
    let sArr = s.split(' ');
    
    const answer = sArr.map((word) => {
    let newWord = [...word].map((each, index) => {
      if (index === 0 || index % 2 === 0) {
        return each.toUpperCase();
      } else {
        return each.toLowerCase();
      }
    });

    return newWord.join('');
  });
    
    return answer.join(' ');
}