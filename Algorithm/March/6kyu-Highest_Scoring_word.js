function high(x){
  const fil = x.split(' ').map((c) => {
    return c.split('').map((t) => {
      return t.charCodeAt() -96
    }).reduce((a,b) => a+b, 0)
  })
  
  return x.split(' ')[fil.indexOf(Math.max(...fil))]
}

// x에 들어오는 문자열에서 띄어쓰기를 기준으로 단어를 나누었을 때
// 그 단어를 구성하고있는 알파벳의 순서값의 합들로 보고 그 값이 가장 큰 단어를 리턴하는 문제
// 들어온 문자열을 띄어쓰기 단위로 쪼갠 다음 그 배열을 map함수를 사용하여 순서값의 합으로 바꾼다.
// 그 다음 그 값들중 가장 큰 값의 index를 x.split(' ')에서 찾아서 리턴하는 방식으로 풀었다.

// 눈에 띄는 clever 답안은 없었음.