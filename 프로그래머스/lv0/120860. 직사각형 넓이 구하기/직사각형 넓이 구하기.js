function solution(dots) {
  const xValues = dots.map(dot => dot[0]); // x축 배열
  const yValues = dots.map(dot => dot[1]); // y축 배열
  
    // x축에서 큰 값에서 x축에서 작은값을 뺀 값의 절대값
  const width = Math.abs(Math.max(...xValues) - Math.min(...xValues)); 
    // y축에서 큰 값에서 y축에서 작은값을 뺀 값의 절대값
  const height = Math.abs(Math.max(...yValues) - Math.min(...yValues)); 
  
  return width * height;
}