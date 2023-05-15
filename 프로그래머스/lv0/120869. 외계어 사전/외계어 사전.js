function solution(spell, dic) {
    console.log(spell.sort().toString());
    // spell과 dic의 요소를 알파벳 순서로 정렬 및 string으로 some함수로 같은지 판별
    var answer = dic.some(e => spell.sort().toString() === [...e].sort().toString());
    // true가 반환되면 1, 아니면 2
    return answer? 1 : 2;
}

// some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트합니다. 만약 배열에서 주어진 함수가 true을 반환하면 true를 반환합니다. 그렇지 않으면 false를 반환합니다.