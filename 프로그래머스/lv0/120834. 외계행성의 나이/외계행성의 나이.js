function solution(age) {
    var answer = '';
    const eng = {
        0: "a",
        1: "b",
        2: "c",
        3: "d",
        4: "e",
        5: "f",
        6: "g",
        7: "h",
        8: "i",
        9: "j"
    }
    
    age = age.toString();
    answer = age.split("");
    answer = answer.map((e) => eng[e]).join("");
    
    return answer;
}