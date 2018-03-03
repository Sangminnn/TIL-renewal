function lettersToNumbers(s) {
  let str, num 
  
  if(s.match(/[a-z]/i)) {
    str = s.match(/[a-z]/gi).map((c) => {
    return (c === c.toLowerCase()) ? c.charCodeAt() - 96 : (c.charCodeAt() - 64) * 2
  }).reduce((a,b) => a+b, 0)
  }
  
  if(s.match(/\d/g)) {
    num = s.match(/\d/g).reduce((a,b) => (+a)+(+b), 0) 
  }
  
  return (str || 0) + (num || 0)
 }

 // s 에 들어오는 string값들 중 소문자 알파벳은 그 알파벳 순서값으로,
 // 대문자 알파벳은 알파벳 순서값의 두배값으로, 숫자는 그 숫자값으로 바꾼 숫자합을 구하는 문제

 // 알파벳이 있을때만 str 변수를 세팅하는 조건문과 숫자가 있을때만 num 변수를 세팅하는 조건문을 만들고
 // 두 변수 다 값이 있을때만 값을 리턴하고 없다면 0 을 리턴하여 답을 도출

 // 코드가 너무 지저분한것같아서 다른 방법을 고안.