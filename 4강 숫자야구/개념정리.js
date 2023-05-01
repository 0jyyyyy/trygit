/**
 * 1. 무작위로 숫자 뽑기
 *  무작위로 숫자를 뽑을 때는 Math.random 메서드를 사용
 *  뽑은 값이 정수가 아니므로 Math.floor 나 Math.ceil 메서드를 같이 사용
 * 
 * 2. 1부터 원하는 숫자까지 들어 있는 배열 만들기
 *  반복문을 사용해 배열에 숫자를 push하면 된다.
 *  
 *  const numbers = [];
 *  for(let n = 1; n <= 숫자; n += 1){
 *      numbers.push(n);
 *  } 
 * 
 * 3. indexOf 와 includes
 *   indexOf : 원하는 값이 들어 있다면 해당 인덱스를 알려주고, 들어 있지 않다면 -1을 반환
 *   includes : 조금 더 직관적으로 true/false 를 반환
 * 
 * '2345'.indexOf(3) === 1;
 * '2345'.indexOf(6) === -1;
 * 
 * ['2','3','4','5'].indexOf('5') === 3;
 * ['2','3','4','5'].indexOf(5) === -1; 요소의 자료형까지 같아야 함
 * 
 * '2345'.includes(3) === true;
 * ['2','3','4','5'].includes(5) === false;
 * 
 * 4. forEach 와 map, fill
 *  forEach : 기본형태 EX) 배열명.forEach((element:요소 , index: 순서) => {
 * 
 *                                      })
 *  forEach는 인수로 함수를 받고, 배열의 요소 하나 하나에 인수로 받은 함수를 각각 적용한다. 이 때 요소 순서대로 함수를 적용하므로 반복문의 역할을 한다.
 *  배열 요소를 반복하는데, 요소 하나하나에 실행
 * 
 *  map : 기본형태 EX) 배열명.map((element, index) => {
 *                  
 *  })
 *  map은 forEach의 역할도 하면서, return이 있기 때문에 return에 적혀있는 새로운 배열을 만든다.
 * 
 *  fill : 기본형태 EX) 배열(9): 길이가 9인 빈배열.fill(넣고싶은 값)
 * 
 *  map과 fill을 이용한 1~9까지 값 넣기
 * 
 *  Array(9).fill(0).map((el,idx) =>{
 *      return idx + 1;
 * })
 * 
 * 5. document.createElement, document.createTextNode
 *  각각 태그와 텍스트를 만드는 메서드
 *  단, 다른 태그에 append 나 appendChild 하기 전 까지는 화면에 보이지 않는다.
 * 
 * 6. appendChild 와 append
 *  document.createElement, document.createTextNode 로 만든 태그나 텍스트를 선택한 태그의 자식태그로 넣는다.
 *  appendChild 로는 하나만 넣을수 있고, append를 사용하면 여러 개를 동시에 넣을 수 있다.
 *  또한 append 로 텍스트를 추가할 때는 document.createTextNode 대신 문자열을 바로 넣어도 된다.
 */