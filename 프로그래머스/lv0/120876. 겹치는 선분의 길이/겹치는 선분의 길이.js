function solution(lines) {
    let segment = new Array(200).fill(0)
    lines.forEach(([min, max]) => {
        for (; min < max; min++) {
            segment[min+100]++ // 음수 -100을 양수로 끌어오기위해서 +100으로 이동
        }
    })
    return segment.filter(v => v > 1).length;
}