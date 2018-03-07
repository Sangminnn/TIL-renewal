function solve(s){
  return Math.max(...s.match(/[aeiou]+/g).map((c) => {return c.length}))
 }

// s에 들어온 문자열 중에서 연속되는 모음의 길이가 가장 긴 길이값을 리턴하는 문제
// spread 연산자를 사용하여 바로 뒤의 값들을 Math.max로 계산할 수 있게 하여 풀었다.

// 눈에 띄는 clever는 없었음.